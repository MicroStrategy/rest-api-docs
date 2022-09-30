# Run `python3 scripts/convert_internal_links_to_sentence_case.py` at root level
# to convert all titles, headers and sidebar_label to sentence case.

import os
import re

from convert_title_to_sentence_case import convert_title_to_sentence_case

def convert_re_match_object_to_string(match):
  start = match.group().find('[')
  new_string = convert_title_to_sentence_case(match.group()[start:], should_capitalize=False)
  return match.group()[:start] + new_string

if __name__ == "__main__":
  for subdir, _, files in os.walk('./docs'):
    # skip images folder
    if subdir.startswith("./docs/images"):
      continue
    for file in files:
      filepath = os.path.join(subdir, file)
      if not filepath.endswith('.md'):
        continue
      with open(filepath, 'r') as f_in:
        lines = f_in.readlines()
      # we then write the data stream back out
      with open(filepath, 'w') as f_out:
        for line in lines:
          new_line = re.sub(r"[^!]\[.+?\]\([^http].+?\)", convert_re_match_object_to_string, line)
          f_out.write(new_line)

