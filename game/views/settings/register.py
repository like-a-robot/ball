from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player



def register(request):
    data = request.GET
    username = data.get("username", "").strip()
    password = data.get("password", "").strip()
    password_confirm = data.get("password_confirm", "").strip()
    if not username or not password:
        return JsonResponse({
            'result': "username or password empty"
        })
    if password != password_confirm:
        return JsonResponse({
            'result': "password is error",
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result': "username is exist"
        })
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo="https://pic4.zhimg.com/v2-a59034aef555c085a9e23fd9dc7b27a7_r.jpg")
    login(request, user)
    return JsonResponse({
        'result': "success",
    })

