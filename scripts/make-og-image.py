"""Generates public/og-image.png (1200x630) used by og:image / twitter:image.

Run again after changing the brand colours or tagline:
    python scripts/make-og-image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"

W, H = 1200, 630
INK = (11, 11, 20)
VIOLET = (139, 82, 247)
BLUE = (59, 118, 246)
WHITE = (255, 255, 255)

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
REGULAR = "C:/Windows/Fonts/segoeui.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def radial_glow(size, colour, opacity):
    """A soft circular glow, matching the hero background treatment.

    The colour layer is flat and the *mask* carries the whole falloff — filling
    an ellipse in the layer too would leave a crisp rim where it meets the ink.
    """
    layer = Image.new("RGB", (size, size), colour)
    inset = size // 4
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((inset, inset, size - inset, size - inset), fill=opacity)
    mask = mask.filter(ImageFilter.GaussianBlur(size // 8))
    return layer, mask


def main():
    img = Image.new("RGB", (W, H), INK)

    glow, mask = radial_glow(900, VIOLET, 150)
    img.paste(glow, (-260, -360), mask)
    glow, mask = radial_glow(820, BLUE, 110)
    img.paste(glow, (700, 300), mask)

    draw = ImageDraw.Draw(img)

    # Gradient rule under the wordmark.
    for x in range(0, 360):
        t = x / 360
        colour = tuple(round(VIOLET[i] + (BLUE[i] - VIOLET[i]) * t) for i in range(3))
        draw.rectangle((80 + x, 262, 81 + x, 268), fill=colour)

    logo = Image.open(PUBLIC / "logo-icon.png").convert("RGBA").resize((96, 96), Image.LANCZOS)
    img.paste(logo, (80, 78), logo)

    draw.text((196, 100), "QueryReply AI", font=font(BOLD, 54), fill=WHITE)

    draw.text(
        (80, 310),
        "Reply to Every Customer",
        font=font(BOLD, 68),
        fill=WHITE,
    )
    draw.text(
        (80, 386),
        "Automatically, Powered by AI.",
        font=font(BOLD, 68),
        fill=(196, 181, 253),
    )

    draw.text(
        (80, 486),
        "AI replies built from the exact product listing your customer is viewing.",
        font=font(REGULAR, 30),
        fill=(255, 255, 255, 200),
    )
    draw.text(
        (80, 530),
        "Chrome extension  ·  Works on any marketplace  ·  Free plan, no credit card",
        font=font(REGULAR, 26),
        fill=(148, 148, 170),
    )

    out = PUBLIC / "og-image.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size / 1024:.1f} kB)")


if __name__ == "__main__":
    main()
