import type { Author, Authors, GhostError, PostOrPage, Settings, PostsOrPages, Tag, Tags } from "@tryghost/content-api";
import api from "../config/api.config";

export async function getPosts() {
    return await api.posts
        .browse({
            include: ["tags", "authors"],
            limit: 10
        })
        .catch((error: GhostError) => {
            throw error
        }) as PostsOrPages;
}

// Pagination
export async function getPaginationPosts(page: number) {
    return await api.posts
        .browse({
            include: ["tags", "authors"],
            limit: 10,
            page: page
        })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
}
export async function getPaginationTagPosts(page: number, tagSlug: string) {
    return await api.posts
        .browse({
            filter: `tag:${tagSlug}`,
            include: ["tags", "authors"],
            limit: 10,
            page: page
        })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
}

// Read (Reading page)

export async function getSinglePost(postSlug: string) {
    return await api.posts
        .read({
            slug: postSlug
        }, { include: ["tags", "authors"] })
        .catch((error: Error) => {
            console.log(error)
        }) as PostOrPage;
}


// Pages (Page)
export async function getAllPages() {
    return await api.pages
        .browse({
            limit: 'all'
        })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
}

export async function getSinglePage(pageSlug: string) {
    return await api.pages
        .read({
            slug: pageSlug
        }, { include: ["tags"] })
        .catch((error: Error) => {
            console.log(error)
        }) as PostOrPage;
}

// Author (Author page)

export async function getSingleAuthor(authorSlug: string) {
    return await api.authors.read({
        slug: authorSlug
    }, { include: ["count.posts"] })
        .catch((error: Error) => {
            console.log(error)
        }) as Author;
}

export async function getSingleAuthorPosts(authorSlug: string) {
    return await api.posts.browse({ filter: `authors:${authorSlug}` })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
};

export async function getAllAuthors() {

    return await api.authors
        .browse({
            limit: "all"
        })
        .catch((error: Error) => {
            console.log(error)
        }) as Authors;
}

// tag (Tag page)

export async function getTagPosts(tagSlug: string) {
    return await api.posts.browse({ filter: `tag:${tagSlug}`, include: ["tags", "authors"] })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
}

export async function getSingleTag(tagSlug: string) {

    return await api.tags.read({ slug: tagSlug })
        .catch((error: Error) => {
            console.log(error)
        }) as Tag;
}

export async function getAllTags() {
    return await api.tags.browse({
        limit: "all", include: 'count.posts'
    })
        .catch((error: Error) => {
            console.log(error)
        }) as Tags;
}

// Search 
export async function getSearchPosts() {
    return await api.posts.browse({ include: ["tags", "authors"], limit: "all" })
        .catch((error: Error) => {
            console.log(error)
        }) as PostsOrPages;
}

// Navigation
export async function getNavigation() {
    return await api.settings.browse()
        .catch((error: Error) => {
            console.log(error)
        }) as Settings

}