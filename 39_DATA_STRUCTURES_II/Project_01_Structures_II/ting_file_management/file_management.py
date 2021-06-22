from os import path
import sys

LAST_ITEM = -1


def validate_txt_format(path):
    format = path.split(".")[LAST_ITEM]

    return format == "txt"


def txt_importer(path_file):
    path_exists = path.exists(path_file)

    if not (path_exists):
        return print(f"Arquivo {path_file} não encontrado", file=sys.stderr)

    valid_format = validate_txt_format(path_file)

    if not valid_format:
        return print("Formato inválido", file=sys.stderr)

    file_content = None

    with open(path_file) as txt_file:
        file_content = txt_file.read().splitlines()

    return file_content
