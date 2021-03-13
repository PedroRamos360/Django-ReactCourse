from django.db import models
from api.models import Room

class SpotifyToken(models.Model):
	user = models.CharField(max_length=50, unique=True)
	created_at = models.DateTimeField(auto_now_add=True)
	refresh_token = models.CharField(max_length=150)
	access_token = models.CharField(max_length=150)
	expires_in = models.DateTimeField()
	token_type = models.CharField(max_length=50)


class Vote(models.Model):
	user = models.CharField(max_length=50, unique=True)
	created_at = models.DateTimeField(auto_now_add=True)
	song_id = models.CharField(max_length=50)
	# Foreign key => passar instância de objeto para o modelo,
	# assim ele armazena uma referência ao objeto no modelo e é
	# possível saber em que sala o voto aconteceu
	room = models.ForeignKey(Room, on_delete=models.CASCADE)
	# CASCADE deletar tudo que referencia Room (os votos)

