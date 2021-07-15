import sys
from ting_file_management.file_management import LAST_ITEM, txt_importer


def get_file_name(path):
    file_name = path.split("/")[LAST_ITEM]

    return file_name


def process(path_file, instance):
    file_lines = txt_importer(path_file)
    file_number_of_lines = len(file_lines)

    file_info = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": file_number_of_lines,
        "linhas_do_arquivo": file_lines,
    }

    for file in instance.queue:
        name = file["nome_do_arquivo"]

        if name == path_file:
            return

    instance.enqueue(file_info)

    for key, value in file_info.items():
        to_print_value = f"'{value}'" if isinstance(value, str) else value
        print(f"'{key}': {to_print_value}", file=sys.stdout)


def remove(instance):
    removed = instance.dequeue()

    if removed:
        file = removed["nome_do_arquivo"]
        return print(f"Arquivo {file} removido com sucesso", file=sys.stdout)

    return print("Não há elementos", file=sys.stdout)


def file_metadata(instance, position):
    try:
        file_info = instance.search(position)

        return file_info
    except IndexError:
        print("Posição inválida", file=sys.stderr)
