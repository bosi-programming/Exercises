import argparse

arg = argparse.ArgumentParser()
arg.add_argument("nome")
nome = vars(arg.parse_args())

print("Olá {}, tudo bem com você?".format(nome["nome"]))
