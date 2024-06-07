from django.db import models
from django.utils import timezone
from apps.creador.models import Creador


def nivel_thumbnail_directory(instance, filename):
    return 'nivel/{0}/{1}'.format(instance.slug, filename)

# Create your models here.
class Nivel_Post(models.Model):
    title =         models.CharField(max_length=255)
    slug =          models.SlugField(max_length=255, unique=True)
    thumbnail =     models.ImageField(upload_to=nivel_thumbnail_directory, max_length=500)


    published =     models.DateTimeField(default=timezone.now)

    views =         models.IntegerField(default=0, blank=True)

    json_nivel =    models.TextField()

    creador =       models.ForeignKey(Creador, on_delete=models.PROTECT)

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