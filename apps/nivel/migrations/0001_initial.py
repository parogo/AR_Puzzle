# Generated by Django 4.2.11 on 2024-05-28 09:42

import apps.nivel.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('creador', '0002_alter_creador_views'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nivel_Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('thumbnail', models.ImageField(upload_to=apps.nivel.models.nivel_thumbnail_directory)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('views', models.IntegerField(blank=True, default=0)),
                ('json_nivel', models.TextField()),
                ('creador', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='creador.creador')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
        migrations.CreateModel(
            name='ViewCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=255)),
                ('nivel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nivelpost_view_count', to='nivel.nivel_post')),
            ],
        ),
    ]