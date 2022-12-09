# Run `python3 scripts/convert_sidebar_labels_to_sentence_case.py` at root level
# to convert all labels to sentence case.
import re

from convert_title_to_sentence_case import convert_title_to_sentence_case

LABEL_ONE_LINE_REGEX = r'.*label:.*",'
LABEL_TWO_LINE_REGEX = r'.*label:.*\n.*",'
SIDEBAR_JS_FILE_PATH = './sidebars.js'


def convert_re_match_object_to_string(match):
  start = match.group().find('"')
  end = match.group().rfind('"')
  new_string = convert_title_to_sentence_case(match.group()[start + 1:end], should_capitalize=True)
  return match.group()[:start + 1] + new_string + match.group()[end:]


if __name__ == "__main__":
  with open(SIDEBAR_JS_FILE_PATH, 'r') as f_in:
    content = f_in.read()
  # we then write the data stream back out
  with open(SIDEBAR_JS_FILE_PATH, 'w') as f_out:
    # convert one-line labels to sentence case
    new_content = re.sub(LABEL_ONE_LINE_REGEX, convert_re_match_object_to_string, content)
    # convert two-line labels to sentence case
    new_content = re.sub(LABEL_TWO_LINE_REGEX, convert_re_match_object_to_string, new_content)
    f_out.write(new_content)
