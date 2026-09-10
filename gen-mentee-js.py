#!/usr/bin/env python3
"""Regenerate data/mentees.js and data/mentee-news.js (embedded fallbacks) from the JSON files.
Run after editing either JSON so the site also loads from a local file:// URL.
Usage: python3 gen-mentee-js.py"""
import json, io, os
here = os.path.dirname(os.path.abspath(__file__))
for src, var, dst in (("mentees.json", "MENTEES_DATA", "mentees.js"),
                      ("mentee-news.json", "MENTEE_NEWS_DATA", "mentee-news.js")):
    with io.open(os.path.join(here, "data", src), encoding="utf-8") as f:
        data = json.load(f)
    out = "/* AUTO-GENERATED from data/%s by gen-mentee-js.py — do not edit by hand. */\n" % src
    out += "window.%s = %s;\n" % (var, json.dumps(data, ensure_ascii=False, indent=2))
    with io.open(os.path.join(here, "data", dst), "w", encoding="utf-8") as f:
        f.write(out)
    n = len(data.get("mentees", data.get("items", [])))
    print("wrote data/%s — %d records" % (dst, n))
