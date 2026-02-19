<?php

namespace App\Filter;

use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\QueryBuilder;

class QueryFilter extends \ApiPlatform\Doctrine\Orm\Filter\AbstractFilter
{

    /**
     * @inheritDoc
     */
    protected function filterProperty(string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []): void
    {
        if ($property === 'q') {
            // Joindre la table PriceProduct
            $alias = $queryBuilder->getRootAliases()[0];
            $queryBuilder
                ->andWhere("$alias.email LIKE '%$value%' OR $alias.fullName LIKE '%$value%' OR $alias.content LIKE '%$value%'")
            ;
        }
    }

    /**
     * @inheritDoc
     */
    public function getDescription(string $resourceClass): array
    {
        return [
            'querySearch' => [
                'property' => 'q',
                'type' => 'string',
                'required' => false,
                'description' => 'recherche dans tous les champs',
            ],
        ];
    }
}