"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/retro-toast";
import type { ContactFormData, ApiResponse } from "@/types";
import Link from "next/link";
import { links } from "@/data/links";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: ApiResponse = await res.json();
      if (result.success) {
        toast.success("> TRANSMISSION COMPLETE", {
          description: result.message,
        });
        reset();
      } else {
        toast.error("> TRANSMISSION FAILED", {
          description: result.message,
        });
      }
    } catch {
      toast.error("> CONNECTION ERROR", {
        description: "Connection failed. Try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-terminal">
          <div className="terminal-header">CONTACT_FORM.EXE</div>
          <div className="contact-init">
            <div className="terminal-row">
              <span className="prompt">{"guest@system:~$"}</span>
              <span className="command">run contact_protocol.sh</span>
            </div>
            <div className="terminal-row">
              <span className="output">
                {"> Establishing secure connection..."}
              </span>
            </div>
            <div className="terminal-row">
              <span className="output" style={{ color: "#00ff00" }}>
                {"> Connection established. Ready for transmission."}
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <label className="form-label">{">"} NAME:</label>
              <input
                {...register("name")}
                type="text"
                className="form-input"
                placeholder="Enter your name..."
                autoComplete="name"
              />
              {errors.name && (
                <span className="form-error">{errors.name.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">{">"} EMAIL:</label>
              <input
                {...register("email")}
                type="email"
                className="form-input"
                placeholder="Enter your email..."
                autoComplete="email"
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">{">"} SUBJECT:</label>
              <input
                {...register("subject")}
                type="text"
                className="form-input"
                placeholder="Enter subject..."
              />
              {errors.subject && (
                <span className="form-error">{errors.subject.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">{">"} MESSAGE:</label>
              <textarea
                {...register("message")}
                className="form-input form-textarea"
                placeholder="Enter your message..."
                rows={5}
              />
              {errors.message && (
                <span className="form-error">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn-retro"
              style={{ width: "100%" }}
              disabled={sending}
            >
              {sending ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
            </button>
          </form>
        </div>

        <div className="contact-sidebar">
          <div className="contact-info-panel">
            <div className="terminal-header">CONNECTION_INFO.DAT</div>
            <div className="contact-info-body">
              <div className="terminal-row">
                <span className="prompt">{"guest@system:~$"}</span>
                <span className="command">cat contact_info.txt</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">EMAIL:</span>
                <Link
                  target="_blank"
                  href="mailto:roshanaryal.dev@gmail.com"
                  className="contact-link"
                >
                  roshanaryal.dev@gmail.com
                </Link>
              </div>
              <div className="contact-info-item">
                <span className="info-label">LOCATION:</span>
                <span className="info-value">Nepal</span>
              </div>
              <div className="contact-info-item">
                <span className="info-label">STATUS:</span>
                <span className="info-value" style={{ color: "#00ff00" }}>
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          <div className="contact-info-panel">
            <div className="terminal-header">SOCIAL_LINKS.SYS</div>
            <div className="contact-info-body">
              <div className="terminal-row">
                <span className="prompt">{"guest@system:~$"}</span>
                <span className="command">ls ./socials/</span>
              </div>
              <Link
                href={links.github}
                target="_blank"
                className="social-link-row"
              >
                <span className="social-icon">{">"}</span>
                <span>GITHUB</span>
              </Link>
              <Link
                href={links.linkedIn}
                target="_blank"
                className="social-link-row"
              >
                <span className="social-icon">{">"}</span>
                <span>LINKEDIN</span>
              </Link>
              <Link href={links.x} target="_blank" className="social-link-row">
                <span className="social-icon">{">"}</span>
                <span>TWITTER / X</span>
              </Link>
            </div>
          </div>

          <div className="contact-availability">
            <div className="availability-dot"></div>
            <span>AVAILABLE FOR FREELANCE & FULL-TIME ROLES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
