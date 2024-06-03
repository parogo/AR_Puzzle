from django.db import models

# Create your models here.
class Creador(models.Model):
    class Meta:
        verbose_name = 'Creador'
        verbose_name_plural = 'Creadores'

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    views = models.IntegerField(default=0, blank=True)

    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='children')

    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views = ViewCount.objects.filter(Creador=self).count()
        return views
    
class ViewCount(models.Model):
    creador = models.ForeignKey(Creador, on_delete=models.CASCADE, related_name='creador_view_count')
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.ip_address}'