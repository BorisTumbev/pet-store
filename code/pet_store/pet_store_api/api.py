from .serializers import UserSerializer
from rest_auth.views import LoginView, APIView
from rest_framework import generics
from django.contrib.auth.models import User


class ULoginView(LoginView):

    def get_response(self):
        orginal_response = super().get_response()
        user_data ={'user': UserSerializer(self.user).data}
        orginal_response.data.update(user_data)

        return orginal_response


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
