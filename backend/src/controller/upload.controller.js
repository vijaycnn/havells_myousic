import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
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
