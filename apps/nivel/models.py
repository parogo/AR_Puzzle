from django.db import models
from django.utils import timezone
from apps.creador.models import Creador



def nivel_thumbnail_directory(instance, filename):
    return 'nivel/{0}/{1}'.format(instance.slug, filename)

class NivelManager(models.Manager):
    def create_nivel(self, title, slug, thumbnail, json_nivel, creador):
        if not title:
            raise ValueError('El título es obligatorio')
        if not slug:
            raise ValueError('El slug es obligatorio')
        if not thumbnail:
            raise ValueError('La miniatura es obligatoria')
        if not json_nivel:
            raise ValueError('El json del nivel es obligatorio')
        if not creador:
            raise ValueError('El creador es obligatorio')
        
        nivel = self.create(title=title, slug=slug, thumbnail=thumbnail, json_nivel=json_nivel, creador=creador)
        
        return nivel

# Create your models here.
class Nivel_Post(models.Model):
    title =         models.CharField(max_length=255, unique=True)
    slug =          models.CharField(max_length=255, unique=True)
    thumbnail =     models.ImageField(upload_to=nivel_thumbnail_directory, max_length=500)


    published =     models.DateTimeField(default=timezone.now)

    views =         models.IntegerField(default=0, blank=True)

    json_nivel =    models.TextField()

    creador =       models.ForeignKey(Creador, on_delete=models.CASCADE)
    #creador =       models.ForeignKey(UserAccount, to_field='username', on_delete=models.CASCADE)

    objects = NivelManager()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
    
    def get_view_count(self):
        views = ViewCount.objects.filter(nivel=self).count()
        return views
    
class ViewCount(models.Model):
    nivel = models.ForeignKey(Nivel_Post, on_delete=models.CASCADE, related_name='nivelpost_view_count')
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.ip_address}'