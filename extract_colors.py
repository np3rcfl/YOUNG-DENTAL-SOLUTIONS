"""Extract exact colors and save cropped section screenshots from the original site."""
from PIL import Image
import os

SCREENSHOTS = r"d:\claude\young dental solutions\screenshots"
CROPS_DIR = r"d:\claude\young dental solutions\screenshots\crops"
os.makedirs(CROPS_DIR, exist_ok=True)

def crop_and_save(img, name, box):
    """box = (left%, top%, right%, bottom%) as fractions of image size"""
    w, h = img.size
    x1 = int(box[0] * w)
    y1 = int(box[1] * h)
    x2 = int(box[2] * w)
    y2 = int(box[3] * h)
    crop = img.crop((x1, y1, x2, y2))
    path = os.path.join(CROPS_DIR, f"{name}.png")
    crop.save(path)
    print(f"  Saved {name}.png ({crop.size[0]}x{crop.size[1]})")
    return crop

def sample_colors(img, label, points_frac):
    """Sample pixel colors at fractional (x, y) positions."""
    w, h = img.size
    print(f"\n--- {label} color samples ---")
    for desc, (fx, fy) in points_frac.items():
        px = int(fx * w)
        py = int(fy * h)
        r, g, b = img.getpixel((px, py))[:3]
        print(f"  {desc}: rgb({r},{g},{b}) = #{r:02X}{g:02X}{b:02X}")

# HOME PAGE
home = Image.open(os.path.join(SCREENSHOTS, "home.png"))
print(f"Home: {home.size}")
# Crop hero (top ~17%)
crop_and_save(home, "home-hero", (0, 0, 1, 0.17))
# Crop nav bar only
crop_and_save(home, "home-nav", (0, 0, 1, 0.025))
# Crop mid section (white body)
crop_and_save(home, "home-body", (0, 0.17, 1, 0.45))
# Crop lower sections
crop_and_save(home, "home-lower", (0, 0.45, 1, 0.75))
# Crop footer
crop_and_save(home, "home-footer", (0, 0.9, 1, 1.0))

sample_colors(home, "HOME", {
    "nav-bg": (0.5, 0.005),
    "hero-bg": (0.05, 0.05),
    "hero-text-area": (0.15, 0.07),
    "hero-button": (0.17, 0.115),
    "body-bg": (0.5, 0.22),
    "section-accent": (0.5, 0.55),
    "footer-bg": (0.5, 0.95),
})

# ABOUT PAGE
about = Image.open(os.path.join(SCREENSHOTS, "about.png"))
print(f"\nAbout: {about.size}")
crop_and_save(about, "about-hero", (0, 0, 1, 0.15))
crop_and_save(about, "about-content", (0, 0.05, 1, 0.25))
sample_colors(about, "ABOUT", {
    "nav-bg": (0.5, 0.005),
    "content-box-bg": (0.65, 0.12),
    "page-bg": (0.1, 0.12),
    "body-bg": (0.5, 0.3),
})

# SERVICES PAGE
services = Image.open(os.path.join(SCREENSHOTS, "services.png"))
print(f"\nServices: {services.size}")
crop_and_save(services, "services-top", (0, 0, 1, 0.2))
crop_and_save(services, "services-cards", (0, 0.1, 1, 0.35))
sample_colors(services, "SERVICES", {
    "nav-bg": (0.5, 0.005),
    "page-bg": (0.5, 0.12),
    "card-area": (0.5, 0.25),
    "button-color": (0.17, 0.32),
})

print("\nDone. Check screenshots/crops/ folder.")
