var link = [
    "https://www.facebook.com/tiuphun",
    "https://www.facebook.com/duc0905",
    "https://www.facebook.com/b1tter.lemon",
    "https://www.facebook.com/dminhdo21",
    "https://www.facebook.com/artofrepartee",
    "https://www.facebook.com/profile.php?id=100018099282624",
    "https://www.facebook.com/profile.php?id=100010746426700",
    "https://www.facebook.com/zang2301",
    "https://www.facebook.com/profile.php?id=100019025919397",
    "https://www.facebook.com/profile.php?id=100003129790632",
    "https://www.facebook.com/profile.php?id=100007381931759",
    "https://www.facebook.com/SoniaTine373",
    "https://www.facebook.com/chiffon.nguyen",
    "https://www.facebook.com/tucamng202",
    "https://www.facebook.com/ngocc.diep.anh",
    "https://www.facebook.com/profile.php?id=100010918217110",
    "https://www.facebook.com/profile.php?id=100013673682622",
    "https://www.facebook.com/duong.anh.31508076",
    "https://www.facebook.com/its.me.for.abbreviation.purposes",
    "https://www.facebook.com/profile.php?id=100018386014350",
    "https://www.facebook.com/xxdeadwarrior1986xx",
    "https://www.facebook.com/narumi.jeanny",
    "https://www.facebook.com/sonkei.sk",
    "https://www.facebook.com/nhumaiqq",
    "https://www.facebook.com/kipiiler",
    "https://www.facebook.com/profile.php?id=100013655326476",
    "https://www.facebook.com/qaiudoi",
    "https://www.facebook.com/punaapom",
    "https://www.facebook.com/nhuanh.phan.1",
    "https://www.facebook.com/profile.php?id=100012605076363",
    "https://www.facebook.com/nguyenngoc.linhchi.09",
    "https://www.facebook.com/profile.php?id=100013931108967",
    "https://www.facebook.com/truccuongnguyen1701",
    "https://www.facebook.com/profile.php?id=100033532989823",
    "https://www.facebook.com/profile.php?id=100009426470762",
    "https://www.facebook.com/honggiang5924",
    "https://www.facebook.com/nnmai0443",
    "https://www.facebook.com/profile.php?id=100011090737054",
    "https://www.facebook.com/profile.php?id=100007069383074",
    "https://www.facebook.com/giathu.tranpham.3",
    "https://www.facebook.com/profile.php?id=100009660158892",
    "https://www.facebook.com/profile.php?id=100039509041065",
];
var mem = [
    "Nguyễn Tiểu Phương",
    "Lê Minh Đức",
    "Đỗ Nhật Thành",
    "Đỗ Đức Minh",
    "Nguyễn Mạnh Hùng",
    "Hoàng Xuân Việt",
    "Nguyễn Minh Đức",
    "Bùi Hương Giang",
    "Lê Kiều Anh",
    "Phạm Nhật Nam",
    "Vũ Phạm Anh Khuê",
    "Trịnh Thùy Trang",
    "Nguyễn Trà My",
    "Nguyễn Cẩm Tú",
    "Nguyễn Ngọc Diệp Anh",
    "Nguyễn Thùy Dung",
    "Ngô Hà Anh Thư",
    "Dương Lâm Tuấn Anh",
    "Tô Minh Đức",
    "Đỗ Hoàng Khánh Nam",
    "Lại Thục Uyên",
    "Đoàn Lê Tường Vy",
    "Vũ Hoàng Sơn",
    "Đinh Nguyễn Như Mai",
    "Nguyễn Doãn Hoàng",
    "Lưu Gia Định",
    "Nguyễn Khánh Linh",
    "Kiều Bảo Xuân",
    "Phan Thị Như Anh",
    "Trần Thị Khánh Linh",
    "Nguyễn Ngọc Linh Chi",
    "Nguyễn Việt Cường",
    "Nguyễn Trực Cường",
    "Hoàng Cao Bảo",
    "Ngô Minh Đức",
    "Lâm Hồng Giang",
    "Nguyễn Ngọc Mai",
    "Lê Nguyệt Hà",
    "Phạm Quốc Anh",
    "Trần Phạm Gia Thư",
    "Đặng Thu Trang",
    "Nguyễn Minh Đức"
];

let statusshare = new Array(60).fill(0);
let statusreact = new Array(60).fill(0);
let statuscmt = new Array(60).fill(0);

function ban(s) {
    if (s >= 0 && s <= 6) return " (Chuyên môn)"
    else if (s >= 7 && s <= 10) return " (Sự kiện)"
    else if (s >= 11 && s <= 16) return " (Truyền thông)"
    else if (s >= 17 && s <= 23) return " (MedDes)"
    else if (s >= 24 && s <= 29) return " (Nhân sự)"
    else if (s >= 30 && s <= 36) return " (Hậu cần)"
    else return " (Tài chính)"
}

function checkshare() {
    var nguoishare = []
    var share = document.getElementsByClassName("fwb fcg");
    for (var i = 0; i < share.length; i++) {
        var tmp = share[i].getElementsByTagName("a")
        var s = tmp[0].getAttribute("href")
        nguoishare.push(s)
    }
    for (var i = 0; i < nguoishare.length; i++) {
        if (link.includes(nguoishare[i])) {
            statusshare[link.indexOf(nguoishare[i])] = 1;
        }
    }
    for (var i = 0; i < link.length; i++) {
        if (statusshare[i] == 0) {
            console.log(mem[i] + ban(i) + " chưa share.");
        }
    }
}

function checkreact() {
    var nguoireact = []
    var react = document.getElementsByClassName("_5j0e fsl fwb fcb");
    for (var i = 0; i < react.length; i++) {
        var tmp = react[i].getElementsByTagName("a");
        var s = tmp[0].getAttribute("href")
        nguoireact.push(s)
    }
    for (var i = 0; i < nguoireact.length; i++) {
        if (link.includes(nguoireact[i])) {
            statusreact[link.indexOf(nguoireact[i])] = 1;
        }
    }
    for (var i = 0; i < link.length; i++) {
        if (statusreact[i] == 0) {
            console.log(mem[i] + ban(i) + " chưa react.");
        }
    }
}

function checkcmt(min) {
    let replies = document.getElementsByClassName('_4ayk')
    for (let i = 0; i < replies.length; i++) {
        replies[i].click();
    }
    var nguoicmt = []
    var cmt = document.getElementsByClassName("_4kk6");
    for (var i = 0; i < cmt.length; i++) {
        var s = cmt[i].getAttribute("href");
        s = s.substring(s.indexOf('.facebook'), s.length)
        nguoicmt.push('https://www' + s);
    }
    for (var i = 0; i < nguoicmt.length; i++) {
        if (link.includes(nguoicmt[i]) == true) {
            statuscmt[link.indexOf(nguoicmt[i])]++;
        }
    }
    for (var i = 0; i < link.length; i++) {
        if (statuscmt[i] < min) {
            console.log(mem[i] + ban(i) + " chưa viết ít nhất " + min + " bình luận.");
        }
    }
}
