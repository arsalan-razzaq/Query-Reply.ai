"""Generates the Chrome Web Store promotional tiles into public/store/.

  small   440x280  — shown next to the listing in store search results
  marquee 1400x560 — used if the listing is ever featured

Screenshots are deliberately NOT generated here: those must be real captures
of the extension running, and a mocked-up one would misrepresent the product.

    python scripts/make-store-tiles.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "store"

INK = (11, 11, 20)
VIOLET = (139, 82, 247)
BLUE = (59, 118, 246)
WHITE = (255, 255, 255)
LILAC = (196, 181, 253)
GREY = (148, 148, 170)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
REGULAR = "C:/Windows/Fonts/segoeui.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def glow(size, colour, opacity):
    layer = Image.new("RGB", (size, size), colour)
    inset = size // 4
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((inset, inset, size - inset, size - inset), fill=opacity)
    return layer, mask.filter(ImageFilter.GaussianBlur(size // 8))


def base(w, h, glows):
    img = Image.new("RGB", (w, h), INK)
    for size, colour, opacity, pos in glows:
        layer, mask = glow(size, colour, opacity)
        img.paste(layer, pos, mask)
    return img


def logo(size):
    return Image.open(PUBLIC / "logo-icon.png").convert("RGBA").resize((size, size), Image.LANCZOS)


def small_tile():
    w, h = 440, 280
    img = base(w, h, [(420, VIOLET, 140, (-150, -190)), (360, BLUE, 100, (250, 140))])
    draw = ImageDraw.Draw(img)

    mark = logo(56)
    img.paste(mark, (36, 34), mark)
    draw.text((104, 48), "QueryReply AI", font=font(BOLD, 28), fill=WHITE)

    draw.text((36, 122), "Auto-reply from the", font=font(BOLD, 30), fill=WHITE)
    draw.text((36, 158), "exact product listing", font=font(BOLD, 30), fill=LILAC)
    draw.text((36, 216), "Works on any marketplace", font=font(REGULAR, 19), fill=GREY)

    out = OUT / "promo-small-440x280.png"
    img.save(out, "PNG", optimize=True)
    return out


def marquee_tile():
    w, h = 1400, 560
    img = base(w, h, [(1000, VIOLET, 150, (-300, -420)), (900, BLUE, 110, (850, 250))])
    draw = ImageDraw.Draw(img)

    mark = logo(88)
    img.paste(mark, (90, 78), mark)
    draw.text((202, 100), "QueryReply AI", font=font(BOLD, 48), fill=WHITE)

    draw.text((90, 236), "Replies built from the exact", font=font(BOLD, 62), fill=WHITE)
    draw.text((90, 306), "product listing on screen", font=font(BOLD, 62), fill=LILAC)

    draw.text(
        (90, 416),
        "No mixing details between similar products.",
        font=font(REGULAR, 28),
        fill=(214, 214, 228),
    )
    draw.text(
        (90, 460),
        "Amazon  ·  eBay  ·  Etsy  ·  WhatsApp Web  ·  any website",
        font=font(REGULAR, 25),
        fill=GREY,
    )

    out = OUT / "promo-marquee-1400x560.png"
    img.save(out, "PNG", optimize=True)
    return out


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for path in (small_tile(), marquee_tile()):
        print(f"wrote {path.relative_to(ROOT)} ({path.stat().st_size / 1024:.1f} kB)")


if __name__ == "__main__":
    main()
