from django.db import models
import string
import random

def generate_unique_code():
    # O tamanho do código é menor do que o máximo porque desta forma permite expansão da aplicação caso
    # os códigos acabem
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        # Filtra todas os objetos de Room que tem o código gerado e retorna o número de salas que tem ele
        if Room.objects.filter(code=code).count == 0:
            break
    
    return code

# Modelos para banco de dados
# "Fat models thin views" colocar maior parte da lógica da aplicação nos models
# Create your models here.
class Room(models.Model):
    # Código para entrar na sala, único: duas salas não podem ter o mesmo código
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    # Informação que identifica o usuário, único: um host não pode ter multíplas salas
    host = models.CharField(max_length=50, unique=True)
    # Booleano que diz se os convidados tem permissão para pausar a música
    guest_can_pause = models.BooleanField(null=False, default=False)
    # Quantos votos são necessários para pular a música
    votes_to_skip = models.IntegerField(null=False, default=1)
    # Data de criação, auto now add adicona automaticamente a data que foi criado
    created_at = models.DateTimeField(auto_now_add=True)
