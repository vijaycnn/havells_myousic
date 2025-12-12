import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,  // Role credentials auto-used
});

export const generateUploadUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;

    const key = `uploads/${Date.now()}_${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 900 });

    return res.json({
      status: "success",
      uploadUrl,
      fileUrl: `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
    });

  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
};
export const generateUrl = async (req, res) => {
  try {
    const { fileName, fileType } = req.body;

    const key = `uploads/gallery/${Date.now()}_${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 900 });

    return res.json({
      status: "success",
      uploadUrl,
      fileUrl: `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
    });

  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
};

export const getDownloadUrl = async (req, res) => {
  const { key } = req.body; // example: uploads/12345_video.mp4

  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // 1 hour

  res.json({ downloadUrl: url });
};
