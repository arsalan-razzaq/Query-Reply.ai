import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/common/Container";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToHash } from "@/utils/scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const sectionIds = NAV_LINKS.filter((link) => link.href.startsWith("#")).map((link) =>
    link.href.replace("#", ""),
  );
  const activeId = useActiveSection(sectionIds);

  const isLinkActive = (href: string) =>
    href.startsWith("#")
      ? location.pathname === "/" && activeId === href.replace("#", "")
      : location.pathname === href;

  const handleNavClick = (href: string) => {
    scrollToHash(href);
  };

  // The mobile Sheet uses Radix's scroll-lock, which restores the pre-open
  // scroll position when it unlocks after close — racing our scrollIntoView
  // and winning. Deferring past the close animation avoids that fight.
  const handleMobileNavClick = (href: string) => {
    window.setTimeout(() => scrollToHash(href), 300);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-brand-ink/70 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo light />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            const pillClassName = cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "text-white" : "text-white/60 hover:text-white",
            );
            const content = (
              <>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </>
            );

            return link.href.startsWith("#") ? (
              <button key={link.href} onClick={() => handleNavClick(link.href)} className={pillClassName}>
                {content}
              </button>
            ) : (
              <Link key={link.href} to={link.href} className={pillClassName}>
                {content}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="bg-gradient-brand h-9 rounded-full px-5 text-sm font-semibold text-white shadow-md shadow-primary/30 hover:opacity-90"
          >
            <a href={SITE.chromeStoreUrl}>Add to Chrome</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="border-white/10 bg-brand-ink">
            <SheetHeader>
              <SheetTitle className="text-white">
                <Logo light />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleMobileNavClick(link.href)}
                      className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="rounded-lg px-3 py-3 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-gradient-brand mt-3 h-10 rounded-full text-sm font-semibold text-white"
                >
                  <a href={SITE.chromeStoreUrl}>Add to Chrome</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </Sheet>
      </Container>
    </motion.header>
  );
}
