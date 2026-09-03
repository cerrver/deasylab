#!/usr/bin/env python3
"""Regenerate data/papers.js (embedded fallback) from data/papers.json.
Run after editing papers.json so the site also loads from a local file:// URL.
Usage: python3 gen-papers-js.py"""
import json, io, os
here = os.path.dirname(os.path.abspath(__file__))
with io.open(os.path.join(here, "data", "papers.json"), encoding="utf-8") as f:
    data = json.load(f)
out = "/* AUTO-GENERATED from data/papers.json by gen-papers-js.py — do not edit by hand. */\n"
out += "window.PAPERS_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
with io.open(os.path.join(here, "data", "papers.js"), "w", encoding="utf-8") as f:
    f.write(out)
print("wrote data/papers.js —", len(data.get("papers", [])), "papers")
