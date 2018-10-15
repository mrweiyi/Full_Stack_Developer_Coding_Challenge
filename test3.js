const classification = { download_progress: 100,
    classification_progress: 100,
    status: 'Classification complete',
    label_dict:
     { '0': 'Adam Brody',
       '1': 'Angelina Jolie',
       '2': 'Brad Pitt',
       '3': 'Kerry Washington',
       '4': 'Michelle Monaghan',
       '5': 'Vince Vaughn' },
    state: 'success',
    detections:
     { '95':
        [ { labels: { '1': 0.9982 },
            bbox: { width: 0.1514, top: 0.1478, height: 0.3689, left: 0.4298 } } ] },
    video_id: '5bc3d5722300422fc58c7b02',
    detection_fps: 1 };

console.log(classification["status"]);