"use client";
import * as Sentry from "@sentry/nextjs";
import Image from "next/image";
import { useEffect } from "react";


type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
}


export default function GlobalError({
  error, reset
}: GlobalErrorProps) {

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="container">
          <Image src={"/assets/bot.gif"}
            width={200}
            height={200}
            alt={"robot gif"}
            unoptimized
          />
          <h1>Oops… l’application a planté </h1>
          <p>Une erreur inattendue s’est produite</p>
          <button onClick={reset}>
            Réessayer
          </button>
        </div>


        <style jsx global>{`
        body {
          margin: 16px;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b);
        }

        .container {
          width: 380px;
          padding: 30px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        h1 {
          font-size: 22px;
          color: #f1f5f9;
          margin: 0;
        }

        p {
          color: #94a3b8;
          font-size: 14px;
          margin: 0;
        }

        button {
          margin-top: 10px;
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          background: #3b82f6;
          color: white;
          font-weight: 500;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s ease;
        }

        button:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        button:active {
          transform: scale(0.95);
        }
      `}</style>
      </body>
    </html>
  );
}
