type IconProps = { className?: string };

export function CheckIcon({ className = "check-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.8 12.2l5.1 5.1 9.3-10.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className = "meta-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.2a7.2 7.2 0 0 0-7.2 7.2c0 5.3 7.2 12.4 7.2 12.4s7.2-7.1 7.2-12.4A7.2 7.2 0 0 0 12 2.2zm0 9.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "meta-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 2.8h3.4l1.3 3.4-2.1 1.3a13 13 0 0 0 6.7 6.7l1.3-2.1 3.4 1.3v3.4c0 .8-.7 1.5-1.5 1.5C9.8 18.3 5.7 14.2 5.7 7.3c0-.8.7-1.5 1.5-1.5-.2 0-.4 0-.6 0z"
      />
    </svg>
  );
}

export function MailIcon({ className = "meta-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.2A1.7 1.7 0 0 1 4.7 4.5h14.6A1.7 1.7 0 0 1 21 6.2v11.6a1.7 1.7 0 0 1-1.7 1.7H4.7A1.7 1.7 0 0 1 3 17.8V6.2zm1.8.6 7.2 5.1 7.2-5.1H4.8zm14.4 1.6-6.7 4.7a1.4 1.4 0 0 1-1.6 0L4.2 8.4v9.1h15z"
      />
    </svg>
  );
}

export function FacebookIcon({ className = "social-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 22V13h3l.5-3.4h-3.5V7.5c0-1 .3-1.7 1.7-1.7H18V2.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.4H8v3.4h3v9h3.2z"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "social-icon" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zm6.2-8.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 4.4c1.5 0 1.7 0 2.3.1h.6c1.5.1 2.3.3 2.9.6a4.4 4.4 0 0 1 1.6 1.1 4.4 4.4 0 0 1 1.1 1.6c.3.6.5 1.4.6 2.9v.6c0 .6.1.8.1 2.3s0 1.7-.1 2.3v.6c-.1 1.5-.3 2.3-.6 2.9a4.4 4.4 0 0 1-1.1 1.6 4.4 4.4 0 0 1-1.6 1.1c-.6.3-1.4.5-2.9.6h-.6c-.6 0-.8.1-2.3.1s-1.7 0-2.3-.1h-.6c-1.5-.1-2.3-.3-2.9-.6a4.4 4.4 0 0 1-1.6-1.1 4.4 4.4 0 0 1-1.1-1.6c-.3-.6-.5-1.4-.6-2.9v-.6c0-.6-.1-.8-.1-2.3s0-1.7.1-2.3v-.6c.1-1.5.3-2.3.6-2.9a4.4 4.4 0 0 1 1.1-1.6 4.4 4.4 0 0 1 1.6-1.1c.6-.3 1.4-.5 2.9-.6h.6c.6 0 .8-.1 2.3-.1M12 2.7c-1.5 0-1.7 0-2.4.1h-.6C7.2 2.9 6.2 3.1 5.4 3.5a6 6 0 0 0-2.2 1.5A6 6 0 0 0 1.7 7.2c-.4.8-.6 1.8-.7 3.6v.6C.9 12.9.9 13.1.9 14.6s0 1.7.1 2.4v.6c.1 1.8.3 2.8.7 3.6a6 6 0 0 0 1.5 2.2 6 6 0 0 0 2.2 1.5c.8.4 1.8.6 3.6.7h.6c.7.1.9.1 2.4.1s1.7 0 2.4-.1h.6c1.8-.1 2.8-.3 3.6-.7a6 6 0 0 0 2.2-1.5 6 6 0 0 0 1.5-2.2c.4-.8.6-1.8.7-3.6v-.6c.1-.7.1-.9.1-2.4s0-1.7-.1-2.4v-.6c-.1-1.8-.3-2.8-.7-3.6a6 6 0 0 0-1.5-2.2 6 6 0 0 0-2.2-1.5c-.8-.4-1.8-.6-3.6-.7h-.6c-.7-.1-.9-.1-2.4-.1z"
      />
    </svg>
  );
}
