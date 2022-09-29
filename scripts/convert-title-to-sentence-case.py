# Run `python3 scripts/convert-title-to-sentence-case.py` at root level
# to convert all titles, headers and sidebar_label to sentence case.

import os
import re

# reserved phrases dictionary, key: all lowercase letters, value: correct format
reserved_phrases = {
  'microstrategy': 'MicroStrategy',
  '.microstrategy.': '.microstrategy.',
  'microstrategy.': 'microstrategy.',
  'microstrategy-rest-api-samples': 'microstrategy-rest-api-samples',
  'embedding sdk': 'Embedding SDK',
  'embedding sdk playground': 'Embedding SDK Playground',
  'rest api playground': 'REST API Playground',
  'intelligence server': 'Intelligence Server',
  'library server': 'Library Server',
  'samesite': 'SameSite',
  'cross-origin resource sharing': 'Cross-Origin Resource Sharing',
  'developer': 'Developer',
  'microstrategy developer': 'MicroStrategy Developer',
  'json data api': 'JSON Data API',
  'push data api': 'Push Data API',
  'api explorer': 'API Explorer',
  '201 created': '201 Created',
  '202 accepted': '202 Accepted',
  '204 no content': '204 No Content',
  '400 bad request': '400 Bad Request',
  '401 unauthorized': '401 Unauthorized',
  '403 forbidden': '403 Forbidden',
  '404 not found': '404 Not Found',
  '500 internal server error': '500 Internal Server Error',
  '501 not implemented': '501 Not Implemented',
  '502 bad gateway': '502 Bad Gateway',
  '503 service unavailable': '503 Service Unavailable',
  '2020 update': '2020 Update',
  '2021 update': '2021 Update',
  'workstation': 'Workstation',
  'source library': 'source Library',
  'target library': 'target Library',
}

def is_word_in_camel_case(word):
  # skip non alpha letters
  i = 0
  while i < len(word) and not word[i].isalpha():
    i += 1
  word = word[i:]

  has_lowercase = False
  has_uppercase = False
  for i, c in enumerate(word):
    if c.islower():
      has_lowercase = True
    elif c.isupper():
      if i != 0:
        has_uppercase = True
    elif not c.isalnum() and c not in {'.', '_', '(', ')', '{', '}', ';', ','}:
      return False

  return has_lowercase and has_uppercase


def is_code_snippet(word):
  has_dot_between_letter = False
  has_left_bracket = False
  has_right_bracket = False

  # skip non alpha letters
  i = 0
  while i < len(word) and not word[i].isalpha():
    i += 1
  word = word[i:]

  for i, c in enumerate(word):
    if i != 0 and i != len(word) - 1 and c == '.' and word[i - 1].isalnum() and word[i + 1].isalnum():
      has_dot_between_letter = True
    elif c == '(':
      has_left_bracket = True
    elif c == ')':
      has_right_bracket = True

  return has_dot_between_letter or (has_left_bracket and has_right_bracket)

def convert_word_to_proper_case(words, i, word):

  # skip non-alpha or non-digit characters
  word_index = 0
  while word_index < len(word) and not word[word_index].isalnum():
    word_index += 1

  prefix = word[:word_index]
  word = word[word_index:]

  if not word[:2].isupper():
    # First letter in the sentence use capitalized case
    if i == 0 or words[i - 1][-1:] in {':', '-', '.'}:
      return prefix + word.capitalize()
    # other words use lowercase
    else:
      return prefix + word.lower()
  else:
    return prefix + word

def convert_title_to_sentence_case(title):
  """
  Convert title string to sentence case.
  """
  words = title.split()
  i = 0
  while i < len(words):
    word = words[i]

    if word.startswith('`'):
      i += 1

      if i < len(words) and words[i].endswith('`'):
        i += 1
      else:
        while i < len(words) and not words[i].endswith('`'):
          i += 1

    elif is_word_in_camel_case(word):
      # skip camel case variable name
      i += 1
    elif is_code_snippet(word):
      i += 1
    elif word.startswith('['):

      is_checking_markdown_link = True
      left_square_bracket_count = 0
      left_parenthesis_count = 0
      is_word_in_backtick = False
      is_word_in_link = False

      while is_checking_markdown_link:

        # pdb.set_trace()

        if '`' in words[i]:
          is_word_in_backtick = True

        if "[" in words[i]:
          left_square_bracket_count += 1
        if "(" in words[i]:
          left_parenthesis_count += 1
          is_word_in_link = True

        if not is_word_in_backtick and not is_word_in_link:
          words[i] = convert_word_to_proper_case(words, i, words[i])
        elif is_word_in_link:
          if ']' in words[i]:
            right_square_bracket_index = words[i].find(']')
            word_before_link = words[i][:right_square_bracket_index]
            if word_before_link[-1] != '`' and 'api/' not in word_before_link:
              words[i] = convert_word_to_proper_case(words, i, word_before_link) + words[i][right_square_bracket_index:]

        if words[i].count('`') == 2 or (is_word_in_backtick and '`' in words[i] and not words[i].startswith('`')):
          is_word_in_backtick = False

        if "]" in words[i]:
          left_square_bracket_count -= 1
        if ")" in words[i]:
          left_parenthesis_count -= 1
          if left_parenthesis_count == 0:
            is_word_in_link = False

        if left_square_bracket_count == 0 and left_parenthesis_count == 0:
          is_checking_markdown_link = False

        i += 1
    else:
      words[i] = convert_word_to_proper_case(words, i, words[i])
      i += 1

  sentence_case_title = ' '.join(words)

  # Use Regex to make all reserved phrases to correct format
  for lower_case_phrase, correct_format_phrase in reserved_phrases.items():
    insensitive_phrase = re.compile(re.escape(lower_case_phrase), re.IGNORECASE)
    sentence_case_title = insensitive_phrase.sub(correct_format_phrase, sentence_case_title)


  return sentence_case_title


for subdir, _, files in os.walk('./docs'):
  # skip images folder
  if subdir.startswith("./docs/images"):
    continue
  for file in files:
    filepath = os.path.join(subdir, file)
    f_in = (x for x in open(filepath, 'r').readlines())
    # we then write the data stream back out
    with open(filepath, 'w') as f_out:
      for line in f_in:
        # convert all titles to sentence case
        if line.startswith("title: "):
          # front matter 'title' line
          title = line[7:]
          sentence_case_title = convert_title_to_sentence_case(title)
          f_out.write(line[:7] + sentence_case_title + '\n')
        elif line.startswith("sidebar_label: "):
          sidebar_label = line[len("sidebar_label: "):]
          sentence_case_sidebar_label = convert_title_to_sentence_case(sidebar_label)
          f_out.write(line[:len("sidebar_label: ")] + sentence_case_sidebar_label + '\n')
        elif line.startswith("#"):
          # markdown title including '#', '##', '###', and etc.

          # skip non-alpha or non-digit characters
          title_index = 0
          while title_index < len(line) and line[title_index] != '`' and not line[title_index].isalnum():
            title_index += 1

          title = line[title_index:]
          sentence_case_title = convert_title_to_sentence_case(title)
          f_out.write(line[:title_index] + sentence_case_title + '\n')
        else:
          # other content
          f_out.write(line)
