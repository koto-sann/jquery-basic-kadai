$(window).on('load scroll', function(e) {
    // HTMLの読込に完了した場合
    if(e.type === 'load'){
        console.log('loadイベントが発生しました');
    }
    // 画面をスクロールした場合
    if(e.type === 'scroll'){
        console.log('scrollイベントが発生しました');
    }
    });