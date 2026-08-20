"use client";

type MenuPdfButtonProps = {
  href: string;
};

export function MenuPdfButton({ href }: MenuPdfButtonProps) {
  return (
    <a
      href={href}
      className="btn-gold"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        const link = document.createElement("a");
        link.href = href;
        link.download = "amanda-janes-bakery-menu.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
      }}
    >
      View and Download
    </a>
  );
}
