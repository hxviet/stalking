# Hướng dẫn sử dụng
*stalking.js* giúp bạn kiểm tra hoạt động của các thành viên của Vietcode trên một trang Facebook nhanh chóng.

1. Mở một trình duyệt web trên laptop.
2. Mở *console* (bấm **Ctrl+Shift+J** hoặc **F12** trên bàn phím).
3. Copy toàn bộ script vào console. Ấn **Enter**.

### Xem những ai chưa share
4. Tìm post bạn cần kiểm tra những ai chưa share.
5. Bấm vào dòng chữ thể hiện số lượng chia sẻ ở góc dưới bên phải của post đó.
6. Scroll xuống liên tục để tất cả các lượt share hiện ra.
7. Viết vào console **checkshare()** rồi ấn Enter.

### Xem những ai chưa react
8. Làm tương tự bước 4, 5 và 6 để hiện tất cả những người đã react với post đó.
9. Viết vào console **checkreact()** rồi ấn Enter.

### Xem những ai chưa comment đủ
10. Ở góc phải phía trên mỗi post có một hình *dấu ba chấm*. Bấm vào đó, rồi bấm vào **See more options** (nếu có), rồi **Show in tab**.
11. Tại tab mới hiện ra, bấm vào *hình bánh răng* ở góc phải phía trên, rồi bấm vào **See full post**.
12. Trên *thanh địa chỉ*, thay **www** trong URL bằng **m** rồi bấm **Enter**. Page sẽ chuyển sang phiên bản di động.
13. Scroll xuống dưới để bấm **View more comments...**. Cứ làm vậy đến khi nào nó không hiện thêm comment.
14. Viết vào console **checkcmt(*x*)**, với ***x*** là số comment tối thiểu mỗi thành viên cần viết. Ví dụ, để xem những ai chưa viết ít nhất 2 comments, bạn viết **checkcmt(2)**. Sau đó, bấm **Enter**.
