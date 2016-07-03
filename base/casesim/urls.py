from django.conf.urls import url, include

from .views import *

urlpatterns = [

    url(r'^accounts/', include('allauth.urls')),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^get_data/$', IndexView.as_view(), name='post-data'),
]
