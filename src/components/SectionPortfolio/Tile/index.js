import {
  WrapperTile,
  Title,
  Descriprion,
  LinksWrapper,
  LinkWrapper,
  Link,
} from "./styled";

function GitHubTile({ name, description, gitUrl, demo }) {
  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " "
  );

  return (
    <WrapperTile title={`repository name: ${name}`}>
      <Title>{formattedName}</Title>
      <Descriprion>{description && description}</Descriprion>
      {demo && (
        <LinksWrapper>
          <dt>Demo:</dt>
          <LinkWrapper>
            <Link href={demo} target="_blank" rel="noreferrer">
              {demo}
            </Link>
          </LinkWrapper>
        </LinksWrapper>
      )}
      {gitUrl && (
        <LinksWrapper>
          <dt>Repo:</dt>
          <LinkWrapper>
            <Link href={gitUrl} target="_blank" rel="noreferrer">
              {gitUrl}
            </Link>
          </LinkWrapper>
        </LinksWrapper>
      )}
    </WrapperTile>
  );
}

export default GitHubTile;
