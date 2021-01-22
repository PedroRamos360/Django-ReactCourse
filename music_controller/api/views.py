from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Create your views here.
class RoomView(generics.ListAPIView):
    # O que deve ser retornado
    queryset = Room.objects.all()
    # A classe que representa o formato que deve ser retornado os dados
    serializer_class = RoomSerializer