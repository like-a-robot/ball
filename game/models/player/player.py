from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(max_length=256, blank=True)
    openid = models.CharField(default="",max_length=50,blank=True,null=True)
    score = models.IntegerField(default=1500)

    def __str__(self):
        return str(self.user)
