import React from 'react';

const Wheel = ({ color,  ...props }) => {
  return (
    <path>
     <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.065 202.377c-1.375 4.294-2.026 8.759-2.065 13.261.019 2.155.161 4.299.48 6.433a43.681 43.681 0 003.939 12.699 43.68 43.68 0 007.679 11.024 43.926 43.926 0 0010.526 8.088 43.602 43.602 0 0025.935 5.116 43.936 43.936 0 0012.725-3.448 43.558 43.558 0 0011.326-7.277 43.759 43.759 0 008.466-10.215 43.63 43.63 0 006.075-25.707 43.965 43.965 0 00-3.003-12.931 43.588 43.588 0 00-16.796-20.412 43.925 43.925 0 00-12.023-5.411 43.58 43.58 0 00-13.371-1.564 43.729 43.729 0 00-13.026 2.522 43.617 43.617 0 00-21.009 16.011 43.928 43.928 0 00-5.858 11.811zm9.545 3.291c-1.071 3.345-1.579 6.824-1.609 10.332.015 1.679.126 3.349.374 5.012a34.036 34.036 0 003.069 9.894 34.048 34.048 0 005.983 8.589 34.233 34.233 0 008.201 6.301 33.947 33.947 0 009.759 3.554c3.431.681 6.971.83 10.447.432a34.232 34.232 0 009.914-2.686 33.968 33.968 0 0015.421-13.629 34.004 34.004 0 004.733-20.028 34.282 34.282 0 00-2.34-10.075 33.97 33.97 0 00-13.086-15.903 34.225 34.225 0 00-9.367-4.216 33.96 33.96 0 00-20.567.746 33.978 33.978 0 00-16.368 12.475 34.208 34.208 0 00-4.564 9.202z"
        fill="#641818"
      /> 
       <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135.845 197.169c-1.888 5.94-2.791 12.102-2.845 18.327.026 2.987.222 5.96.667 8.918a60.505 60.505 0 005.446 17.575 60.648 60.648 0 0010.667 15.32 60.614 60.614 0 0014.527 11.173 60.619 60.619 0 0017.423 6.356 60.616 60.616 0 0018.53.775 60.624 60.624 0 0017.692-4.782 60.66 60.66 0 0015.707-10.089 60.519 60.519 0 0020.164-49.815 60.635 60.635 0 00-4.137-17.854 60.608 60.608 0 00-9.432-15.969 60.606 60.606 0 00-13.829-12.358 60.638 60.638 0 00-16.708-7.531 60.646 60.646 0 00-18.542-2.171 60.5 60.5 0 00-18.065 3.496 60.504 60.504 0 00-16.18 8.762 60.66 60.66 0 00-12.952 13.444 60.597 60.597 0 00-8.133 16.423zm16.22 5.208c-1.375 4.294-2.026 8.759-2.065 13.261.019 2.155.161 4.299.48 6.433a43.681 43.681 0 003.939 12.699 43.68 43.68 0 007.679 11.024 43.926 43.926 0 0010.526 8.088 43.602 43.602 0 0025.935 5.116 43.936 43.936 0 0012.725-3.448 43.558 43.558 0 0011.326-7.277 43.759 43.759 0 008.466-10.215 43.63 43.63 0 006.075-25.707 43.965 43.965 0 00-3.003-12.931 43.588 43.588 0 00-16.796-20.412 43.925 43.925 0 00-12.023-5.411 43.58 43.58 0 00-13.371-1.564 43.729 43.729 0 00-13.026 2.522 43.617 43.617 0 00-21.009 16.011 43.928 43.928 0 00-5.858 11.811z"
        fill="#8C2C2C"
      /> 
       <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150.775 207.352a46.507 46.507 0 00-.775 8.141c.019 2.155.161 4.299.48 6.433.046.306.094.611.146.915l14.389-.329c.398-.009.804-.024 1.216-.038 2.263-.08 4.704-.165 6.953.57 1.508.492 2.533 1.396 3.056 2.577.517 1.17.512 2.549.096 3.954-.695 2.346-2.082 4.516-3.381 6.55-.348.546-.691 1.081-1.012 1.608l-3.685 6.049a12735.5 12735.5 0 00-2.972 4.878 43.977 43.977 0 007.338 5.077 43.381 43.381 0 006.069 2.756l6.93-12.647c.208-.38.415-.771.626-1.167 1.052-1.984 2.179-4.109 3.868-5.717 1.03-.981 2.452-1.857 4.092-1.627 1.488.209 2.673 1.225 3.549 2.197 1.625 1.804 2.804 4.069 3.914 6.203.316.608.627 1.206.942 1.779l3.315 6.051 2.692 4.912a43.574 43.574 0 0013.402-7.836l-7.607-12.484-.225-.37c-1.126-1.839-2.719-4.444-3.262-6.84-.292-1.291-.298-2.598.307-3.713.613-1.128 1.793-1.954 3.646-2.399 2.382-.571 4.958-.458 7.372-.351.647.028 1.283.056 1.9.071 2.361.054 4.642.094 6.926.133l.07.002c1.822.031 3.646.063 5.511.102.592-3.491.759-7.056.49-10.586a43.925 43.925 0 00-.581-4.503c-2.17.025-4.295 0-6.413-.025h-.015c-2.592-.03-5.174-.061-7.835 0-.398.01-.804.024-1.216.038-2.264.08-4.704.166-6.953-.569-1.508-.493-2.533-1.396-3.056-2.578-.517-1.17-.512-2.548-.096-3.953l11.141-18.177a43.283 43.283 0 00-4.775-3.576 43.956 43.956 0 00-9.25-4.537c-.997 1.842-1.929 3.613-2.863 5.387l-.01.018c-1.136 2.159-2.274 4.322-3.53 6.614-.208.38-.416.771-.626 1.167-1.052 1.984-2.179 4.11-3.868 5.717-1.031.981-2.452 1.858-4.092 1.628-1.488-.21-2.673-1.226-3.55-2.198-1.624-1.804-2.803-4.069-3.913-6.203-.317-.608-.628-1.206-.942-1.779-1.103-2.013-2.169-3.897-3.237-5.785l-.001-.001c-.833-1.473-1.668-2.949-2.521-4.487l-.017.006a43.744 43.744 0 00-13.577 7.852c1.11 1.776 2.228 3.484 3.349 5.197l.002.003c1.4 2.139 2.805 4.287 4.198 6.573l.226.369c1.125 1.84 2.719 4.445 3.261 6.841.292 1.29.299 2.597-.307 3.712-.612 1.128-1.793 1.955-3.645 2.399-2.382.572-4.959.458-7.373.352a86.786 86.786 0 00-1.899-.071c-4.13-.096-8.261-.19-12.392-.285z"
        fill="url(#prefix__paint5_radial)"
      /> 
       <path
        d="M187 215.185c.002-2.587 1.669-4.958 4.105-5.83 2.435-.872 5.231-.099 6.873 1.9 1.641 1.999 1.856 4.892.527 7.111-1.329 2.219-3.98 3.396-6.517 2.893-2.528-.501-4.524-2.588-4.916-5.135a6.157 6.157 0 01-.072-.939z"
        fill="#6D3535"
      /> 
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135.845 197.169c-1.888 5.94-2.791 12.102-2.845 18.327.026 2.987.222 5.96.667 8.918a60.505 60.505 0 005.446 17.575 60.648 60.648 0 0010.667 15.32 60.614 60.614 0 0014.527 11.173 60.619 60.619 0 0017.423 6.356 60.616 60.616 0 0018.53.775 60.624 60.624 0 0017.692-4.782 60.66 60.66 0 0015.707-10.089 60.519 60.519 0 0020.164-49.815 60.635 60.635 0 00-4.137-17.854 60.608 60.608 0 00-9.432-15.969 60.606 60.606 0 00-13.829-12.358 60.638 60.638 0 00-16.708-7.531 60.646 60.646 0 00-18.542-2.171 60.5 60.5 0 00-18.065 3.496 60.504 60.504 0 00-16.18 8.762 60.66 60.66 0 00-12.952 13.444 60.597 60.597 0 00-8.133 16.423zm6.958 2.253c-1.682 5.251-2.478 10.71-2.526 16.215.024 2.636.197 5.257.587 7.867a53.44 53.44 0 004.817 15.528 53.385 53.385 0 009.39 13.48 53.694 53.694 0 0012.871 9.89 53.324 53.324 0 0031.713 6.256 53.739 53.739 0 0015.561-4.216 53.274 53.274 0 0013.849-8.898 53.507 53.507 0 0010.352-12.491 53.353 53.353 0 007.429-31.435 53.778 53.778 0 00-3.672-15.812 53.33 53.33 0 00-20.539-24.96 53.683 53.683 0 00-14.701-6.616 53.278 53.278 0 00-16.35-1.913 53.473 53.473 0 00-15.928 3.084 53.53 53.53 0 00-14.295 7.745 53.337 53.337 0 00-11.395 11.833 53.716 53.716 0 00-7.163 14.443z"
        fill="#191823"
      />
    </path>
  )
}

export default Wheel;