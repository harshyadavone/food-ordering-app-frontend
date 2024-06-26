import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type Props = {
    heading: string;
    description: string;
}

const NoResultFound = ({heading, description}: Props) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="w-24 h-24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
              transform="translate(0 6)"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-center mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col text-gray-500">
            <span>
             {description}
            </span>
          </div>
        </motion.p>

        <div className="flex items-center gap-4">
          <motion.div
            className="rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="font-semibold">
              <Link to={"/"}>
                <Button variant="outline"> Go Back</Button>
              </Link>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NoResultFound;
