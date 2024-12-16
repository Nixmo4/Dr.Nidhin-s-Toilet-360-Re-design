var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "Dry Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.14709838133876119,
        "pitch": 0.1363446506184225,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.7055384745121405,
          "pitch": 0.2736308099212881,
          "rotation": 4.71238898038469,
          "target": "1-wet-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "Wet Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04630465362434677,
        "pitch": -0.10151244797113002,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.80935483519416,
          "pitch": 0.24279669791706127,
          "rotation": 4.71238898038469,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr. Nidhin's Toilet Re-design",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
