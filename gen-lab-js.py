#!/usr/bin/env python3
"""Regenerate data/lab-members.js and data/lab-news.js (embedded fallbacks) from the JSON files.
Run after editing either JSON so the site also loads from a local file:// URL.
Usage: python3 gen-lab-js.py"""
import json, io, os
here = os.path.dirname(os.path.abspath(__file__))
for src, var, dst in (("lab-members.json", "LAB_MEMBERS_DATA", "lab-members.js"),
                      ("lab-news.json", "LAB_NEWS_DATA", "lab-news.js")):
    with io.open(os.path.join(here, "data", src), encoding="utf-8") as f:
        data = json.load(f)
    out = "/* AUTO-GENERATED from data/%s by gen-lab-js.py — do not edit by hand. */\n" % src
    out += "window.%s = %s;\n" % (var, json.dumps(data, ensure_ascii=False, indent=2))
    with io.open(os.path.join(here, "data", dst), "w", encoding="utf-8") as f:
        f.write(out)
    n = len(data.get("members", data.get("items", [])))
    print("wrote data/%s — %d records" % (dst, n))
