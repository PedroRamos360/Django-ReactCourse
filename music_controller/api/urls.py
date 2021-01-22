from django.urls import path
from .views import RoomView

urlpatterns = [
    # as_view() função que transforma a classe em uma view
    path('home', RoomView.as_view()),
]