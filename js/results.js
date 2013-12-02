new Chart($('#top-title-words')[0].getContext('2d')).Bar({
  labels : ['apps','graphics','angularjs','jquery','applications','mobile','backbone','javascript','web'],
  datasets : [
    {
      fillColor : 'rgba(0,185,87,0.5)',
      strokeColor : 'rgba(0,185,87,1)',
      data : [3,3,3,4,4,5,5,13,16]
    }
  ]
}, {});

new Chart($('#top-description-words')[0].getContext('2d')).Bar({
  labels : ['software', 'session', 'code', 'tools', 'backbone', 'jquery', 'learn', 'mobile', 'javascript', 'web'],
  datasets : [
    {
      fillColor : 'rgba(0,185,87,0.5)',
      strokeColor : 'rgba(0,185,87,1)',
      data : [14,15,15,18,20,23,24,26,36,57]
    }
  ]
}, {});