package in.mysite.neeraj.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/video")
public class VideoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String location = request.getParameter("location");
		System.out.println(location);
		
		response.setContentType("video/mp4");
		ServletOutputStream outputStream = response.getOutputStream();

		String realPath = getServletContext().getRealPath(location);
		File file = new File(realPath);

		FileInputStream fileInputStream = new FileInputStream(file);
		byte[] b = new byte[(int) file.length()];

		fileInputStream.read(b);
		outputStream.write(b);

		fileInputStream.close();
		outputStream.flush();
		outputStream.close();
	}
}
