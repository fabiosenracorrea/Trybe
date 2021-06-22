FILE_KEYS = ["nome_do_arquivo", "qtd_linhas", "linhas_do_arquivo"]
FIRST_INDEX = 0
INDEX_TO_HUMAN_OFFSET = 1


def destructure(dict, *keys):
    return [dict[key] if key in dict else None for key in keys]


def find_word(word, instance, show_content=False):
    lower_word = word.lower()

    files_data = instance.queue

    matches = []

    for file_data in files_data:
        (
            name,
            qtd_lines,
            lines,
        ) = destructure(file_data, *FILE_KEYS)

        base_control = {"palavra": word, "arquivo": name, "ocorrencias": []}

        for index in range(FIRST_INDEX, qtd_lines):
            line_text = lines[index]
            line_lower_text = line_text.lower()

            has_word = bool(line_lower_text.count(lower_word))

            if has_word:
                human_line_number = index + INDEX_TO_HUMAN_OFFSET

                content = {"conteudo": line_text} if show_content else {}

                new_match = {"linha": human_line_number, **content}
                base_control["ocorrencias"].append(new_match)

        if len(base_control["ocorrencias"]):
            matches.append(base_control)

    return matches


def exists_word(word, instance):
    matches = find_word(word, instance)

    return matches


def search_by_word(word, instance):
    matches = find_word(word, instance, show_content=True)

    return matches
