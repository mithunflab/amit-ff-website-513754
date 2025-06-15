<think>
Okay, I need to generate a production-ready Feature.tsx component for a Garena Free Fire TH website. The user wants a professional look, so I should focus on making it modern, responsive, and accessible.

First, I'll set up the file structure. Since it's a React component, I'll start with the imports. I'll need React, and since the user mentioned TypeScript, I'll include the necessary types. Also, I'll import styled-components for styling because they allow for modern CSS practices and theming.

Next, I'll define an interface for the FeatureProps to ensure type safety. This will include properties like title, description, and an optional icon.

Now, creating the Feature component. I'll use styled-components to create styled elements. The FeatureContainer should be a flex container with a column direction on mobile and row on larger screens. This makes it responsive. I'll add some padding and a gap for spacing.

For the FeatureIcon, I'll use an img tag that's a circle, so I'll apply a border-radius. The icon will only be displayed if the iconSrc is provided.

The FeatureContent will hold the title and description. I'll use h3 for the title and p for the description. Styling these with proper margins and font sizes will make it look clean.

I'll add a hover effect to the FeatureContainer for interactivity, scaling it slightly when hovered. This makes the component feel dynamic.

Exporting the component with a proper display name is good for debugging. I'll also include a comment for the image source as a placeholder, reminding the user to replace it.

Finally, I'll ensure that the component is accessible by using semantic HTML elements and proper alt text for images. The responsive design will adapt well to different screen sizes, maintaining a professional look.

I think that covers all the requirements: functional code, modern practices, responsiveness, and accessibility. Time to put it all together in the Feature.tsx file.
</think>

```typescript
import React from 'react';
import styled, { css } from 'styled-components';

interface FeatureProps {
  title: string;
  description: string;
  iconSrc?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, iconSrc }) => {
  return (
    <FeatureContainer>
      <FeatureIcon>
        {iconSrc && (
          <img
            src={iconSrc}
            alt={title}
            className="feature-icon"
            loading="lazy"
          />
        )}
      </FeatureIcon>
      <FeatureContent>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </FeatureContent>
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  .feature-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

const FeatureContent = styled.div`
  .feature-title {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
  }

  .feature-description {
    margin: 0;
    color: #666;
    line-height: 1.6;
    max-width: 300px;
  }
`;

Feature.displayName = 'Feature';
```