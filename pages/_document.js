import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script>
            {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(registration => {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(error => {
                      console.log('ServiceWorker registration failed: ', error);
                    });
                });
              }
            `}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
