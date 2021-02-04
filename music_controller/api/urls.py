from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom, LeaveRoom

urlpatterns = [
	# as_view() função que transforma a classe em uma view
	path('room', RoomView.as_view()),
	path('create-room', CreateRoomView.as_view()),
	path('get-room', GetRoom.as_view()),
	path('join-room', JoinRoom.as_view()),
	path('user-in-room', UserInRoom.as_view()),
	path('leave-room', LeaveRoom.as_view()),
]