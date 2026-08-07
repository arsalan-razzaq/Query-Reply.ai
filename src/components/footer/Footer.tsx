import { Link } from "react-router-dom";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/common/Container";
import { FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "@/constants/footer";
import { SITE } from "@/constants/site";
import { scrollToHash } from "@/utils/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-ink">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-white/50">{SITE.description}</p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollToHash(link.href)}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </button>
                    ) : link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Get Started</h3>
            <p className="mt-4 text-sm text-white/50">
              Install QueryReply AI and start automating your replies in minutes.
            </p>
            <Link
              to="/pricing"
              className="bg-gradient-brand mt-4 inline-flex h-10 items-center rounded-lg px-5 text-sm font-semibold text-white shadow-md shadow-primary/30 hover:opacity-90"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">Made with care for better conversations.</p>
        </div>
      </Container>
    </footer>
  );
}
