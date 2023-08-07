import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;

public class ImageDownloader {
    public static void main(String[] args) {
        String imageUrl = "https://www.fnob.it/wp-content/uploads/2020/12/volto_uomo.jpg";

        try {
            byte[] imageBytes = downloadImage(imageUrl);
            System.out.println(Arrays.toString(imageBytes));

            // Ora puoi utilizzare imageBytes come dati binari nella tua query di inserimento nel database
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static byte[] downloadImage(String imageUrl) throws IOException {
        URL url = new URL(imageUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        try (InputStream inputStream = connection.getInputStream()) {
            int contentLength = connection.getContentLength();
            byte[] buffer = new byte[contentLength];
            int bytesRead = 0;

            while (bytesRead < contentLength) {
                int bytesRemaining = contentLength - bytesRead;
                int bytesToRead = Math.min(bytesRemaining, buffer.length);
                int bytesReadNow = inputStream.read(buffer, bytesRead, bytesToRead);

                if (bytesReadNow == -1) {
                    break;
                }

                bytesRead += bytesReadNow;
            }

            return buffer;
        } finally {
            connection.disconnect();
        }
    }
}
