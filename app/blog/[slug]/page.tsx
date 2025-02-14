import Breadcrumb from "@/components/breadcrumb"
import BlogPostContent from "@/components/blog/blog-post-content"
import AboutSidebar from "@/components/about/about-sidebar"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// In a real app, this would be fetched from a database
const blogPosts:any = {
  "bi-mat-dang-sau-nhung-canh-cua": {
    title: "Bí mật đằng sau những cánh cửa luôn chật ních người của Salon tóc nam Hair Salon Chinh",
    content: `Đó có thể là 5 cửa hàng rộng khắp toàn quốc song 5 khi người ta không biết giải cánh hàng loạt xe máy, ô tô đậu đầy dài trước các cửa tiệm salon cắt tóc nam Hair Salon Chinh. Chưa kể mới đây là tất đến nhờ cắt tóc xịn kiểu tăng đột biến, trung bình một cửa hàng phải nhận tiếp đô hàng nghìn lượt khách mỗi ngày, ai cũng háo hức để có được kiểu tóc đẹp trai siêu hot chỉ 100K. Đâu là bí mật sau thực sự hút khủng tưởng đó?`,
    sections: [
      {
        title: "Trải nghiệm thư giãn cực mê",
        content:
          "Thay vì chỉ gọi đầu, cắt tóc là xong như các tiệm tóc nam thông thường, tại Hair Salon Chinh anh em sẽ được tận hưởng quy trình chăm sóc đa công nghệ cao như rửa spa. Đội ngũ Skinner khéo léo, massage khắp khuôn mặt, trên huyệt thư giãn mang đến cho bạn cảm giác thư thái, trút hết mọi mệt mỏi để bước ra khỏi salon với phong thái tự tin hơn bao giờ hết.",
      },
      {
        title: "Mức giá hời cho một combo chăm sóc toàn diện",
        content:
          "Một trong những điểm điểm làm nên tên tuổi Hair Salon Chinh khiến khách hàng thay đổi thói quen cắt tóc ở tiệm đầu ngõ chính là gói dịch vụ Shine combo 100K. Khái niệm combo 7 bước đã qua quên thuộc với những vị khách ruột của Hair Salon Chinh, trải nghiệm tất cả các bước: Rửa mặt – Chăm sóc da mặt công nghệ cao – Gội đầu massage – Tư vấn kiểu tóc phù hợp theo khuôn mặt – Cắt tạo kiểu bởi những Stylist hàng đầu – Cao mặt ém đi, gọt xả kỹ càng – Vuốt sáp tạo kiểu. Trọn gói cực kính tế chỉ 100K không làm đau ví tiền mà và mới mẻ tóc đẹp, sau đó bạn sẽ đẹp trai hoàn hảo!",
      },
      {
        title: "Đội ngũ stylist chuyên nghiệp – Hiểu bạn hơn cả chính bạn",
        content:
          "Mỗi stylist ở Hair Salon Chinh là sở hữu những cá tính, thế mạnh về một kiểu tóc khác nhau, nhưng đều chung sự tận tâm, khéo léo, mong muốn đem đến cho phái mạnh những kiểu tóc đẹp trai, dẫn đầu xu hướng để tự tin bứt phá trong sự nghiệp. Chỉ cần bạn đưa ra yêu cầu, stylist sẽ tư vấn kiểu tóc phù hợp dựa trên khuôn mặt, tính trạng sức khỏe của tóc cũng như phong cách mà bạn hướng tới.",
      },
      {
        title: "Dịch vụ chăm sóc nhiệt tình – Đặt lịch qua app tiện lợi",
        content:
          "Tại Hair Salon Chinh, khách hàng được đội ngũ nhân viên trẻ trung thực quan tâm đến từng chi tiết nhỏ như đầu xe, sạc xe điện, wifi, nước uống miễn phí lạnh mát,... Đây là quy chuẩn về con người mà Hair Salon Chinh luôn hướng tới để nâng tầm trải nghiệm của anh em. Đặc biệt đủ luôn trong tình trạng chật rích nhưng mọi khách hàng đều không cần chờ đợi lâu cắt tóc vì đã được đặt lịch từ trước thông qua ứng dụng cài đặt sẵn trên điện thoại. Quả là điểm cộng to lớn cho những khách hàng bận rộn.",
      },
    ],
  },
  "3-kieu-toc-nam-hot-trend": {
    title: "Là đàn ông, đừng bỏ lỡ 3 kiểu tóc nam Hot Trend nhất 2024 này",
    content: `Không cứ đàn ông xấu, chỉ có đàn ông chưa lựa chọn đúng kiểu tóc mà thôi. Chọn được kiểu tóc phù hợp với khuôn mặt và phong cách của mình là điều vô cùng quan trọng. Hãy cùng Hair Salon Chinh điểm qua 3 kiểu tóc nam đang là hot trend 2024 nhé!`,
    sections: [
      {
        title: "Kiểu tóc Layer - Phong cách trẻ trung năng động",
        content: `Layer là kiểu tóc được cắt theo nhiều lớp, tạo độ phồng tự nhiên và rất phù hợp với những anh em có khuôn mặt dài hoặc trán cao. Kiểu tóc này giúp che đi khuyết điểm và tạo cảm giác cân đối cho khuôn mặt.

Để tạo kiểu Layer đẹp, stylist sẽ cắt tóc theo từng lớp với độ dài khác nhau, sau đó sử dụng sáp vuốt tóc để tạo texture cho mái tóc. Kiểu tóc này rất dễ styling và phù hợp với nhiều phong cách khác nhau.`,
      },
      {
        title: "Undercut - Mạnh mẽ và cá tính",
        content: `Undercut là kiểu tóc được cắt ngắn hoặc cạo sát hai bên và phía sau, để phần tóc trên đỉnh đầu dài hơn. Đây là kiểu tóc mang đến vẻ ngoài mạnh mẽ, cá tính và rất được ưa chuộng trong năm 2024.

Ưu điểm của kiểu tóc này là dễ tạo kiểu, phù hợp với nhiều khuôn mặt và đặc biệt là rất mát mẻ trong thời tiết nóng bức. Tuy nhiên, bạn cần thường xuyên cắt tỉa để giữ form tóc đẹp.`,
      },
      {
        title: "Two-Block - Xu hướng từ Hàn Quốc",
        content: `Two-Block là kiểu tóc đang làm mưa làm gió trong giới trẻ, đặc biệt là những người yêu thích phong cách Hàn Quốc. Kiểu tóc này được cắt ngắn phần gáy và hai bên, nhưng không cạo sát như Undercut, phần tóc trên đỉnh đầu được để dài hơn và thường được uốn nhẹ.

Two-Block mang đến vẻ ngoài trẻ trung, năng động nhưng vẫn giữ được nét lịch sự, thanh lịch. Kiểu tóc này đặc biệt phù hợp với những anh em có khuôn mặt tròn hoặc vuông.`,
      },
      {
        title: "Lời khuyên khi chọn kiểu tóc",
        content: `Khi chọn kiểu tóc, bạn cần chú ý đến:
- Hình dáng khuôn mặt
- Tính chất tóc (dày/mỏng, thẳng/xoăn)
- Phong cách cá nhân
- Thời gian và công sức bạn có thể dành cho việc tạo kiểu hàng ngày

Đừng ngần ngại tham khảo ý kiến của các stylist chuyên nghiệp tại Hair Salon Chinh để được tư vấn kiểu tóc phù hợp nhất với bạn.`,
      },
    ],
  },
  "toc-uon-con-sau": {
    title:
      'Không nằm ngoài cơn sốt "Tóc uốn con sâu," Đình Trọng cùng Duy Mạnh đến Hair Salon Chinh để bắt Trend cho bằng được',
    content: `Kiểu tóc uốn con sâu đang là một trong những xu hướng tóc nam hot nhất hiện nay. Không chỉ giới trẻ mà ngay cả các cầu thủ nổi tiếng như Đình Trọng và Duy Mạnh cũng không thể bỏ qua trend này. Hãy cùng Hair Salon Chinh tìm hiểu về kiểu tóc đang gây sốt này nhé!`,
    sections: [
      {
        title: "Tóc uốn con sâu là gì?",
        content: `Tóc uốn con sâu là kiểu tóc được uốn xoăn nhẹ, tạo thành những lọn tóc nhỏ, mềm mại như những con sâu nhỏ. Kiểu tóc này mang đến vẻ ngoài trẻ trung, năng động nhưng không kém phần thời trang.

Điểm đặc biệt của kiểu tóc này là những lọn tóc được uốn không đều nhau, tạo cảm giác tự nhiên và phá cách. Đây là lý do vì sao kiểu tóc này được nhiều người yêu thích, đặc biệt là giới trẻ và những người của công chúng.`,
      },
      {
        title: "Quy trình uốn tóc con sâu tại Hair Salon Chinh",
        content: `Để có được kiểu tóc uốn con sâu đẹp, các stylist tại Hair Salon Chinh sẽ thực hiện qua các bước sau:

1. Tư vấn và phân tích tóc
2. Gội đầu và dưỡng tóc
3. Cắt tỉa tạo form
4. Uốn tóc bằng thuốc uốn chuyên dụng
5. Xử lý và dưỡng tóc sau uốn
6. Tạo kiểu và hướng dẫn chăm sóc tại nhà

Toàn bộ quy trình được thực hiện bởi các stylist có nhiều năm kinh nghiệm, đảm bảo mang đến kết quả tốt nhất cho khách hàng.`,
      },
      {
        title: "Chăm sóc tóc uốn con sâu",
        content: `Để giữ được form tóc đẹp và bền lâu, bạn cần:

- Sử dụng dầu gội chuyên dụng cho tóc uốn
- Dưỡng tóc thường xuyên bằng dầu xả và mặt nạ tóc
- Hạn chế sử dụng máy sấy tóc ở nhiệt độ cao
- Không chải tóc khi tóc ướt
- Định kỳ cắt tỉa và dưỡng tóc tại salon

Hair Salon Chinh có các sản phẩm chăm sóc tóc chuyên dụng, giúp bạn duy trì kiểu tóc đẹp lâu dài.`,
      },
      {
        title: "Lời khuyên từ chuyên gia",
        content: `Các stylist tại Hair Salon Chinh khuyên rằng:

- Nên thực hiện uốn tóc tại các salon uy tín để đảm bảo chất lượng
- Chọn độ xoăn phù hợp với khuôn mặt và phong cách
- Duy trì chế độ chăm sóc tóc đều đặn
- Nên uốn lại sau 3-4 tháng để giữ form tóc đẹp

Đặc biệt, với kiểu tóc này, việc chọn đúng sản phẩm tạo kiểu cũng rất quan trọng để tóc luôn giữ được form đẹp.`,
      },
    ],
  },
  "huong-dan-vuot-toc-layer": {
    title: "Hướng dẫn vuốt tóc layer tại nhà mà vẫn đẹp hoàn hảo",
    content: `Layer là một trong những kiểu tóc được ưa chuộng nhất hiện nay, đặc biệt phù hợp với những anh em có khuôn mặt dài hoặc trán cao. Tuy nhiên, không phải ai cũng biết cách vuốt tóc layer sao cho đẹp. Hôm nay, Hair Salon Chinh sẽ hướng dẫn chi tiết cách vuốt tóc layer tại nhà.`,
    sections: [
      {
        title: "Chuẩn bị dụng cụ cần thiết",
        content: `Trước khi bắt đầu vuốt tóc, bạn cần chuẩn bị:

1. Sáp vuốt tóc phù hợp (Clay, Wax hoặc Pomade)
2. Máy sấy tóc
3. Lược chải tóc
4. Gương để quan sát
5. Xịt tạo phồng (nếu cần)
6. Xịt giữ nếp (tùy chọn)

Việc chọn đúng loại sáp vuốt tóc rất quan trọng. Hair Salon Chinh khuyên bạn nên sử dụng các sản phẩm chất lượng cao để có được kết quả tốt nhất.`,
      },
      {
        title: "Các bước vuốt tóc layer cơ bản",
        content: `1. Gội đầu sạch và làm khô tóc đến độ ẩm khoảng 70%
2. Sấy tóc theo hướng muốn tạo kiểu
3. Lấy một lượng sáp vừa đủ, xoa đều trong lòng bàn tay
4. Vuốt sáp từ gốc đến ngọn, tập trung vào các lớp tóc
5. Dùng ngón tay tạo texture cho tóc
6. Chỉnh sửa các lọn tóc theo ý muốn
7. Xịt giữ nếp nếu cần

Lưu ý: Không nên lấy quá nhiều sáp trong một lần, tốt nhất là chia thành nhiều lần vuốt để dễ kiểm soát.`,
      },
      {
        title: "Mẹo vuốt tóc layer cho từng độ dài",
        content: `Tóc layer ngắn:
- Tập trung vuốt phần đỉnh đầu
- Tạo độ phồng vừa phải
- Có thể vuốt ngược về phía sau

Tóc layer vừa:
- Vuốt theo hướng tự nhiên của tóc
- Tạo độ rối nhẹ ở phần đuôi
- Có thể để một vài lọn tóc rủ xuống trán

Tóc layer dài:
- Chia tóc thành nhiều phần nhỏ
- Vuốt từng phần một
- Tạo độ phồng ở chân tóc`,
      },
      {
        title: "Các lỗi thường gặp và cách khắc phục",
        content: `1. Tóc bị bết: 
- Nguyên nhân: Dùng quá nhiều sáp
- Khắc phục: Giảm lượng sáp, tăng cường sấy tóc

2. Tóc không giữ được form:
- Nguyên nhân: Sáp không phù hợp hoặc tóc quá mượt
- Khắc phục: Đổi loại sáp, sử dụng thêm gôm xịt

3. Tóc thiếu độ phồng:
- Nguyên nhân: Kỹ thuật sấy chưa đúng
- Khắc phục: Sấy ngược từ dưới lên, sử dụng xịt tạo phồng

4. Tóc bị xơ:
- Nguyên nhân: Sấy quá nóng hoặc thiếu dưỡng
- Khắc phục: Giảm nhiệt độ sấy, tăng cường dưỡng tóc`,
      },
    ],
  },
  "side-swept-nam": {
    title: "Side Swept Nam: Làm thế nào để duy trì vẻ lãng tử dài lâu?",
    content: `Side Swept là kiểu tóc nam đang được ưa chuộng bởi vẻ đẹp lãng tử, thanh lịch mà nó mang lại. Tuy nhiên, để duy trì được kiểu tóc này đẹp và bền lâu không phải là điều dễ dàng. Hãy cùng Hair Salon Chinh tìm hiểu cách chăm sóc và tạo kiểu Side Swept hiệu quả nhé!`,
    sections: [
      {
        title: "Side Swept là gì?",
        content: `Side Swept là kiểu tóc được vuốt sang một bên, tạo nên vẻ thanh lịch, nam tính. Kiểu tóc này đặc biệt phù hợp với:

- Nam giới có khuôn mặt oval hoặc vuông
- Những người làm việc trong môi trường công sở
- Những ai yêu thích phong cách lịch lãm, chỉn chu

Side Swept có thể được biến tấu với nhiều độ dài khác nhau, từ ngắn đến trung bình, phù hợp với nhiều phong cách khác nhau.`,
      },
      {
        title: "Cách tạo kiểu Side Swept chuẩn",
        content: `Để có được kiểu tóc Side Swept đẹp, bạn cần thực hiện các bước sau:

1. Gội đầu sạch và làm khô tóc đến độ ẩm 70%
2. Xịt pre-styling để bảo vệ tóc khỏi nhiệt
3. Sấy tóc theo hướng muốn tạo kiểu
4. Sử dụng sáp hoặc pomade có độ bóng phù hợp
5. Vuốt tóc sang một bên, tạo đường rẽ ngôi rõ ràng
6. Cố định kiểu tóc bằng gôm xịt

Lưu ý: Chọn sản phẩm tạo kiểu phù hợp với chất tóc và độ bóng mong muốn.`,
      },
      {
        title: "Bí quyết duy trì Side Swept bền đẹp",
        content: `Để giữ kiểu tóc Side Swept luôn đẹp, bạn cần:

1. Dưỡng tóc thường xuyên:
- Sử dụng dầu gội phù hợp
- Ủ tóc 1-2 lần/tuần
- Tránh gội đầu bằng nước quá nóng

2. Tạo kiểu đúng cách:
- Không vuốt tóc khi tóc quá ướt
- Sử dụng lược chải phù hợp
- Tránh kéo tóc quá mạnh

3. Bảo vệ tóc:
- Đội mũ khi ra nắng
- Hạn chế sử dụng nhiệt độ cao
- Cắt tỉa định kỳ 3-4 tuần/lần`,
      },
      {
        title: "Những lỗi thường gặp khi tạo kiểu Side Swept",
        content: `1. Sử dụng quá nhiều sản phẩm:
- Khiến tóc bị bết
- Tóc nhanh bẩn
- Khó giữ form

2. Chọn sai sản phẩm:
- Độ bóng không phù hợp
- Độ giữ nếp không đủ
- Làm tóc khô cứng

3. Tạo kiểu không đúng cách:
- Không tạo được độ phồng
- Tóc không vào nếp
- Rẽ ngôi không cân đối

Để khắc phục, hãy đến Hair Salon Chinh để được tư vấn và hướng dẫn cách tạo kiểu phù hợp với bạn.`,
      },
    ],
  },
  "sidepart-kieu-toc": {
    title: "Sidepart - Kiểu tóc cứ để là đẹp của hàng triệu anh em nam giới",
    content: `Sidepart là một trong những kiểu tóc kinh điển, không bao giờ lỗi mốt và phù hợp với hầu hết nam giới. Từ dân văn phòng đến người nổi tiếng đều ưa chuộng kiểu tóc này bởi vẻ đẹp lịch lãm, chuyên nghiệp mà nó mang lại.`,
    sections: [
      {
        title: "Sidepart và những biến tấu hiện đại",
        content: `Sidepart ngày nay đã có nhiều biến tấu khác nhau:

1. Classic Sidepart:
- Rẽ ngôi sâu
- Độ bóng cao
- Phù hợp môi trường công sở

2. Modern Sidepart:
- Rẽ ngôi nông hơn
- Độ phồng vừa phải
- Phù hợp nhiều场合

3. Textured Sidepart:
- Tạo độ rối nhẹ
- Phong cách trẻ trung
- Dễ dàng tạo kiểu

Mỗi phiên bản đều có những nét đặc trưng riêng, phù hợp với từng phong cách và môi trường khác nhau.`,
      },
      {
        title: "Chọn Sidepart phù hợp với khuôn mặt",
        content: `Để chọn kiểu Sidepart phù hợp, cần xem xét:

1. Khuôn mặt tròn:
- Rẽ ngôi sâu
- Tạo độ phồng vừa phải
- Để tóc hai bên gọn gàng

2. Khuôn mặt dài:
- Rẽ ngôi nông
- Tạo độ phồng nhẹ
- Để tóc hai bên dày hơn

3. Khuôn mặt vuông:
- Rẽ ngôi vừa phải
- Tạo góc cạnh mềm mại
- Kết hợp với tóc mái

4. Khuôn mặt oval:
- Linh hoạt trong việc chọn kiểu
- Có thể thử nhiều biến tấu
- Dễ dàng tạo kiểu`,
      },
      {
        title: "Các bước tạo kiểu Sidepart chuẩn",
        content: `1. Chuẩn bị:
- Gội đầu sạch
- Sấy khô tóc 70%
- Chuẩn bị các sản phẩm tạo kiểu

2. Tạo kiểu:
- Xác định vị trí rẽ ngôi
- Sấy tóc theo hướng mong muốn
- Tạo độ phồng phù hợp

3. Hoàn thiện:
- Sử dụng sáp hoặc pomade
- Chỉnh sửa các chi tiết
- Cố định bằng gôm xịt

Lưu ý: Sử dụng lược chải phù hợp và không tạo lực quá mạnh khi chải tóc.`,
      },
      {
        title: "Chăm sóc và duy trì kiểu tóc",
        content: `Để duy trì kiểu tóc Sidepart đẹp:

1. Chăm sóc hàng ngày:
- Gội đầu sạch sẽ
- Sử dụng dầu xả
- Tránh gội đầu quá nhiều

2. Chăm sóc định kỳ:
- Cắt tỉa 3-4 tuần/lần
- Ủ tóc hàng tuần
- Đi spa tóc định kỳ

3. Sử dụng sản phẩm:
- Chọn sản phẩm phù hợp
- Không lạm dụng hóa chất
- Thay đổi sản phẩm theo mùa

Hair Salon Chinh luôn sẵn sàng tư vấn và giúp bạn có được kiểu tóc Sidepart hoàn hảo nhất.`,
      },
    ],
  },
  "cham-soc-toc-sport": {
    title: 'Bí quyết chăm sóc tóc Sport để anh em luôn "chuẩn men"',
    content: `Tóc Sport là một trong những kiểu tóc nam phổ biến và được ưa chuộng nhất hiện nay. Với độ dài vừa phải và phong cách năng động, kiểu tóc này rất phù hợp với nam giới hiện đại. Tuy nhiên, để giữ được vẻ đẹp "chuẩn men" cho kiểu tóc này, bạn cần có những bí quyết chăm sóc đặc biệt.`,
    sections: [
      {
        title: "Đặc điểm của kiểu tóc Sport",
        content: `Tóc Sport có những đặc điểm nổi bật:

1. Độ dài:
- Phần mái: 5-7cm
- Phần thân: 3-5cm
- Phần gáy: 2-3cm

2. Phong cách:
- Năng động, trẻ trung
- Dễ tạo kiểu
- Phù hợp nhiều môi trường

3. Ưu điểm:
- Dễ chăm sóc
- Thoáng mát
- Phù hợp khí hậu nhiệt đới`,
      },
      {
        title: "Chăm sóc tóc Sport hàng ngày",
        content: `Để giữ tóc Sport luôn đẹp, bạn cần:

1. Vệ sinh tóc:
- Gội đầu mỗi ngày hoặc 2 ngày/lần
- Sử dụng dầu gội phù hợp
- Massage da đầu nhẹ nhàng

2. Tạo kiểu:
- Sấy khô tóc đúng cách
- Sử dụng sáp tạo kiểu phù hợp
- Tránh dùng quá nhiều sản phẩm

3. Bảo vệ tóc:
- Đội mũ khi ra nắng
- Tránh tác động mạnh
- Giữ tóc sạch sẽ`,
      },
      {
        title: "Sản phẩm chăm sóc tóc Sport",
        content: `Các sản phẩm cần thiết:

1. Dầu gội:
- Phù hợp với da đầu
- Không gây khô tóc
- Có khả năng làm sạch tốt

2. Sáp tạo kiểu:
- Độ giữ nếp vừa phải
- Không gây bết tóc
- Dễ dàng gội sạch

3. Dưỡng tóc:
- Dầu dưỡng tóc
- Xịt dưỡng tóc
- Mặt nạ tóc

Hair Salon Chinh có đầy đủ các sản phẩm chăm sóc tóc chất lượng cao, phù hợp với từng loại tóc.`,
      },
      {
        title: "Những lưu ý quan trọng",
        content: `Để duy trì tóc Sport đẹp:

1. Cắt tỉa định kỳ:
- 2-3 tuần/lần
- Giữ form tóc chuẩn
- Tránh tóc xơ rối

2. Chế độ ăn uống:
- Bổ sung protein
- Uống đủ nước
- Ăn nhiều rau xanh

3. Thói quen sinh hoạt:
- Ngủ đủ giấc
- Tập thể dục đều đặn
- Hạn chế stress

4. Tránh:
- Sử dụng nhiều hóa chất
- Tạo kiểu khi tóc ướt
- Dùng nước quá nóng

Đến Hair Salon Chinh để được tư vấn chi tiết về cách chăm sóc tóc Sport phù hợp với bạn.`,
      },
    ],
  },
  "quiff-doi-gio-voi-chat-hoai-co": {
    title: "Quiff - Đổi gió với chất hoài cổ",
    content: `Quiff là kiểu tóc mang đậm chất retro nhưng không kém phần hiện đại. Được yêu thích từ những năm 50 của thế kỷ trước, Quiff vẫn giữ được sức hút của mình đến tận ngày nay nhờ vẻ đẹp vừa cổ điển vừa thời thượng.`,
    sections: [
      {
        title: "Lịch sử và sự phát triển của Quiff",
        content: `Quiff có lịch sử phát triển thú vị:

1. Nguồn gốc:
- Xuất hiện từ những năm 1950
- Được giới nghệ sĩ yêu thích
- Biểu tượng của phong cách retro

2. Phát triển:
- Kết hợp với undercut hiện đại
- Thêm nhiều biến tấu mới
- Phù hợp xu hướng đương đại

3. Đặc điểm:
- Phần trước dựng cao
- Hai bên gọn gàng
- Độ dài vừa phải`,
      },
      {
        title: "Các phiên bản Quiff phổ biến",
        content: `Quiff có nhiều biến thể khác nhau:

1. Classic Quiff:
- Phần trước cao vừa phải
- Độ bóng truyền thống
- Phong cách lịch lãm

2. Modern Quiff:
- Kết hợp với undercut
- Độ phồng cao hơn
- Phong cách hiện đại

3. Textured Quiff:
- Tạo độ rối tự nhiên
- Ít sử dụng sản phẩm tạo bóng
- Phong cách trẻ trung

4. Pompadour Quiff:
- Phần trước cao hơn
- Độ bóng đáng kể
- Phong cách nổi bật`,
      },
      {
        title: "Cách tạo kiểu Quiff hoàn hảo",
        content: `Các bước tạo kiểu Quiff:

1. Chuẩn bị:
- Gội đầu sạch
- Sấy tóc đến độ ẩm 70%
- Xịt pre-styling

2. Tạo form:
- Sấy ngược lên trên
- Tạo độ phồng từ gốc
- Định hình phần trước

3. Hoàn thiện:
- Sử dụng sáp hoặc pomade
- Tạo texture theo ý muốn
- Cố định bằng gôm xịt

Lưu ý: Chọn sản phẩm tạo kiểu phù hợp với phiên bản Quiff bạn muốn tạo.`,
      },
      {
        title: "Bảo quản và chăm sóc kiểu tóc Quiff",
        content: `Để giữ Quiff luôn đẹp:

1. Chăm sóc hàng ngày:
- Gội đầu sạch sẽ
- Sử dụng dầu xả
- Tạo kiểu đúng cách

2. Bảo vệ tóc:
- Tránh tác động mạnh
- Đội mũ khi ra nắng
- Hạn chế nhiệt độ cao

3. Dưỡng tóc:
- Ủ tóc định kỳ
- Sử dụng serum dưỡng tóc
- Cắt tỉa thường xuyên

Hair Salon Chinh sẽ giúp bạn có được kiểu tóc Quiff hoàn hảo và hướng dẫn cách chăm sóc phù hợp.`,
      },
    ],
  },
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]

  if (!post) {
    return <div className="container mx-auto py-8">Post not found</div>
  }

  return (
    <main className="bg-white py-8">
      <div className="container mx-auto">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${params.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <BlogPostContent post={post} />
          </div>
          <div className="lg:col-span-1">
            <AboutSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

