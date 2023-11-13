import requests
import json


#SOLICITANDO O ESTADO PARA O USUÁRIO
estado = input('Digite a UF do estado: ')

#ARMAZENANDO O REQUEST DA API NUMA VARIÁVEL
response = requests.get(f'https://brasilapi.com.br/api/ibge/municipios/v1/{estado}?providers=dados-abertos-br,gov,wikipedia')

#CONDIÇÃO, SE RETORNO FOR 200, FORMATA EM JSON E IMPRIME AS CIDADES
if response.status_code == 200:
    dadosApi = response.json()

    print('NOME DE TODAS AS CIDADES DO ESTADO SOLICITADO:\n')
    for i in dadosApi:
        print(i['nome'])

#SE NÃO, APRESENTA MENSAGEM DE ERRO
else:
    print("Erro na requisição. Código:", response.status_code)