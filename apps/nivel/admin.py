from django.contrib import admin

# Register your models here.
from .models import *

#admin.site.register(NivelManager)
admin.site.register(Nivel_Post)
admin.site.register(ViewCount)
admin.site.register(LikeCount)